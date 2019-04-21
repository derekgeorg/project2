function displaySavedSearches(res){
    $("#savedSearchesContainer").empty();
    for (let i = 0; i<res.length; i++) {
        //for every result make a button
        let badge = $("<button>").addClass("saveSearch");
        let name = $("<span>").addClass("badge badge-info").text(res[i].search_name);
        let type = $("<span>").attr("id", "type").text(res[i].pet_type).css("display", "none");
        let color = $("<span>").attr("id", "color").text(res[i].color).css("display", "none");
        let sex = $("<span>").attr("id", "sex").text(res[i].sex).css("display", "none");

        badge.append(name, type, color, sex);

        $("#savedSearchesContainer").append(badge);
    }
}

function displaySearchResults(res) {
    $("#tbody").empty();

    for (let i = 0; i < res.length; i++) {
        let newEntry = $("<tr>");
        let location = $("<td>").text(res[i].location.human_address.zip);
        let sex = $("<td>").attr("scope", "row").text(res[i].sex);
        let looks_like = $("<td>").text(res[i].looks_like);
        let color = $("<td>").text(res[i].color);
        let image = $("<td>").text(res[i].image.url);
        let claim = $("<td>").append("<button class = 'btn btn-success claimButton'>Claim</button>");

        newEntry.append(location, sex, looks_like, color, image, claim);

        $("#tbody").append(newEntry);
    }
}

$(document).ready((function () {

    $(".logout").on("click", function (e) {

        e.preventDefault();

        $.ajax("/logout", {
            type: "GET"
        }).then(function (res) {
            document.location.replace(res.url);
            console.log("You are no longer signed in");
        });
    });

    $("#createAccountSubmit").on("click", function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();

        let email = $("#createEmail").val();
        let password = $("#createPassword").val();

        $.ajax("/signup", {
            type: "POST",
            data: {
                email: email,
                password: password
            }
        }).then(function (res) {
            document.location.replace(res.url);
        });
    });

    $("#signInSubmit").on("click", function (e) {
        e.preventDefault();

        let email = $("#signInEmail").val();
        let password = $("#signInPassword").val();
        $.ajax("/login", {
            type: "POST",
            data: {
                email: email,
                password: password
            }
        }).then(function (res) {
            console.log(res);
            document.location.replace(res.url);
        });
    });

    $("#searchPageButton").on("click", function (e) {
        e.preventDefault();
        document.location.replace("/search");
    });

    $("#newSearch").on("click", function (e) {
        e.preventDefault();
        
        $("#afterSearch").hide();
        $("#beforeSearch").show();
    });

    $(document).on("click", ".saveSearch", function (e) {
        e.preventDefault();

        let search = {
            pet_type: $(this).children("#type").text(),
            color: $(this).children("#color").text(),
            sex: $(this).children("#sex").text()
        };

        console.log(search);

        $.ajax("/api/search", {
            type: "GET",
            data: search
        }).then(function(res){
            console.log(res);
            displaySearchResults(res);
        });

    
    });

    $("#savedSearches").on("click", function (e) {
        e.preventDefault();
    
        $.ajax("/saved/searches", {
            type: "GET"
        }).then(function (res) {
            console.log(res);
            displaySavedSearches(res);
        });

    });
    
    $("#saveSearch").on("click", function (e) {
        e.preventDefault();

        $("#afterSearch").hide();
        $("#beforeSearch").show();

        let search = {
            search_name: $("#searchName").val().trim(),
            pet_type: $("#petType").val(),
            color: $("#petColor").val(),
            sex: $("#petSex").val()
        };

        $.ajax("api/save/search", {
            type: "POST",
            data: search
        }).then(function(res){
            console.log(res);
        });

    });

    $("#searchSubmit").on("click", function (event) {
        event.preventDefault();

        $("#afterSearch").show();
        $("#beforeSearch").hide();

        let newSearch = {
            pet_type: $("#petType").val(),
            color: $("#petColor").val(),
            sex: $("#petSex").val()
        };

        $.ajax("/api/search*", {
            type: "GET",
            data: newSearch
        }).then(function (res) {
            console.log(res);
            displaySearchResults(res);
        });
        
    });

    //submit lost pet
    $("#lostSubmit").on("click", function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();

        $("#error-message").text("");

        console.log($("#lostType").val().trim());
        console.log($("#breedLost").val().trim());
        console.log($("#colorLost").val().trim());
        console.log($("#sexLost").val().trim());
        console.log($("#ageLost").val().trim());
        console.log($("#zipLost").val().trim());
        console.log($("#imgLost").val().trim());
        
        if (!$("#lostType").val().trim() || !$("#breedLost").val().trim() || !$("#colorLost").val().trim() || !$("#zipLost").val().trim() || !$("#imgLost").val().trim()) {
            $("#error-message").text("Please fill in all fields");
            return;
        }

        var lostSearch = {
            pet_type: $("#lostType").val().trim(),
            looks_like: $("#breedLost").val().trim(),
            color: $("#colorLost").val().trim(),
            sex: $("#sexLost").val().trim(),
            age: $("#ageLost").val().trim(),
            zip: $("#zipLost").val().trim(),
            image_url: $("#imgLost").val().trim()
        };

        $.ajax("/api/lost-pet", {
            type: "POST",
            data: lostSearch
        }).then(function (response) {
            console.log(lostSearch);
            console.log("Submitting new lost pet");

            $("#breedLost").val("");
            $("#colorLost").val("");
            $("#sexLost").val("");
            $("#ageLost").val("");
            $("#imgLost").val("");
            $("#zipLost").val("");

            $("#submitModal").modal();
        });
    });

    //submit found pet
    $("#foundSubmit").on("click", function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();


        $("#error-message").text("");

        console.log($("#foundType").val().trim());
        console.log($("#breedFound").val().trim());
        console.log($("#colorFound").val().trim());
        console.log($("#sexFound").val().trim());
        console.log($("#ageFound").val().trim());
        console.log($("#zipFound").val().trim());
        console.log($("#imgFound").val().trim());

        if (!$("#foundType").val().trim() || !$("#breedFound").val().trim() || !$("#colorFound").val().trim() || !$("#zipFound").val().trim() || !$("#imgFound").val().trim()) {
            $("#error-message").text("Please fill in all fields");
            return;
        }
        

        var foundSearch = {
            pet_type: $("#foundType").val().trim(),
            looks_like: $("#breedFound").val().trim(),
            color: $("#colorFound").val().trim(),
            sex: $("#sexFound").val().trim(),
            age: $("#ageFound").val().trim(),
            zip: $("#zipFound").val().trim(),
            image_url: $("#imgFound").val().trim()
        };

        $.ajax("/api/found-pet", {
            type: "POST",
            data: foundSearch
        }).then(function (response) {
            console.log(foundSearch);
            console.log("Submitting new found pet");
            $("#breedFound").val("");
            $("#colorFound").val("");
            $("#sexFound").val("");
            $("#ageFound").val("");
            $("#imgFound").val("");
            $("#zipFound").val("");

            $("#submitModal").modal();
        });
    });
}));
