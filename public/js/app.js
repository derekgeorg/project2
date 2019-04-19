
function displaySearchResults(res) {
    $("#tbody").empty();

    for (let i = 0; i < res.length; i++) {
        let newEntry = $("<tr>");
        let sex = $("<th>");
        let looks_like = $("<td>");
        let color = $("<td>");
        let image = $("<td>");

        sex.attr("scope", "row");
        sex.text(res[i].sex);
        looks_like.text(res[i].looks_like);
        color.text(res[i].color);
        image.text(res[i].image.url);

        newEntry.append(sex);
        newEntry.append(looks_like);
        newEntry.append(color);
        newEntry.append(image);

        $("#tbody").append(newEntry);
    }
}

$(document).ready((function () {

    // if (!$("#breedLost").val() ) {
    //     document.getElementById("lostSubmit").disabled = true;
    // }


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

    $("#searchSubmit").on("click", function (event) {
        event.preventDefault();

        let newSearch = {
            type: $("#petType").val(),
            color: $("#petColor").val()
        };

        $.ajax("/api/search", {
            type: "POST",
            data: newSearch
        }).then(function (res) {
            console.log(res);
            displaySearchResults(res);
        });
    });

    //submit lost pet
    $("#lostSubmit").on("click", function (event) {
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
            location: {
                zip: $("#zipLost").val().trim()
            },
            image: {
                url: $("#imgLost").val().trim()
            }
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
            location: {
                zip: $("#zipFound").val().trim()
            },
            image: {
                url: $("#imgFound").val().trim()
            }
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
