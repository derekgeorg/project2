function displaySearchResults(res) {
    $("#tbody").empty();

    for (let i =0; i<res.length; i++) {
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

//<tr>
//    <th scope="row">Intact Female</th>
//    <td>Snowshoe Mix</td>
//    <td>Seal Point</td>
//    <td>http://petharbor.com/get_image.asp?RES=Detail&ID=A792513&LOCATION=ASTN</td>
//</tr>

$(document).ready((function () {

    $(".logout").on("click", function(e){
        e.preventDefault();

        $.ajax("/logout", {
            type: "GET"
        }).then(function(res){
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

    $("#searchPageButton").on("click", function(e) {
        document.location.replace("/api/strays");
    }); 

    //search database
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
            // for (var i = 0; i < data.length; i++) {
            //     var searchDiv = $("<div class='searchDiv'></div>");
            // var p1 = $("<p>").html("<span id='descriptionHeader'>Found Location: </span>" + data[i]["Found Location"]);
            //     var p2 = $("<p>").html("<span id='descriptionHeader'>At AAC: </span>" + data[i]["At AAC"]);
            //     var p3 = $("<p>").html("<span id='descriptionHeader'>Intake Date: </span>" + data[i]["Intake Date"]);
            //     var p4 = $("<p>").html("<span id='descriptionHeader'>Type: </span>" + data[i]["Type"]);
            //     var p5 = $("<p>").html("<span id='descriptionHeader'>Looks Like: </span>" + data[i]["Looks Like"]);
            //     var p6 = $("<p>").html("<span id='descriptionHeader'>Color: </span>" + data[i]["Color"]);
            //     var p7 = $("<p>").html("<span id='descriptionHeader'>Sex: </span>" + data[i]["Sex"]);
            //     var p8 = $("<p>").html("<span id='descriptionHeader'>Age: </span>" + data[i]["Age"]);
            //     var image = $("<img>").attr("src", data[i]["Image Link"]);
            //     searchDiv.append(image, p1, p2, p6, p3, p4, p5, p6, p7, p8);
            // }
        });
    });

    //submit lost pet
    $("#lostSubmit").on("click", function (event) {

        console.log($("#breedLost").val().trim());
        console.log($("#colorLost").val().trim());
        console.log($("#sexLost").val().trim());
        console.log($("#ageLost").val().trim());
        console.log(("#imgLost").val().trim());

        event.preventDefault();

        var lostSearch = {
            looks_like: $("#breedLost").val().trim(),
            color: $("#colorLost").val().trim(),
            sex: $("#sexLost").val().trim(),
            age: $("#ageLost").val().trim(),
            image: $("#imgLost").val().trim()
        };

        $.ajax("/api/lost-pet", {
            type: "POST",
            data: lostSearch
        }).then(function (response) {
            console.log("Submitting new lost pet");

            $("#breedLost").val("");
            $("#colorLost").val("");
            $("#sexLost").val("");
            $("#ageLost").val("");
            $("#imgLost").val("");

            $("#submitModal").modal();

        });
    });

    //submit found pet
    $("#foundSubmit").on("click", function (event) {
        console.log($("#breedFound").val().trim());
        console.log($("#colorFound").val().trim());
        console.log($("#sexFound").val().trim());
        console.log($("#ageFound").val().trim());
        console.log($("#imgFound").val().trim());


        event.preventDefault();

        var foundSearch = {
            looks_like: $("#breedFound").val().trim(),
            color: $("#colorFound").val().trim(),
            sex: $("#sexFound").val().trim(),
            age: $("#ageFound").val().trim(),
            image: $("#imgFound").val().trim()
        };

        $.ajax("/api/found-pet", {
            type: "POST",
            data: foundSearch
        }).then(function (response) {
            console.log("Submitting new found pet");
            $("#breedFound").val("");
            $("#colorFound").val("");
            $("#sexFound").val("");
            $("#ageFound").val("");
            $("#imgFound").val("");

            $("#submitModal").modal();
        });
    });
}));