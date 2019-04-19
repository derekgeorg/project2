
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

    $("#logout").on("click", function (e) {
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

    //submit lost pet
    $("#lostSubmit").on("click", function (event) {

        console.log($("#breedLost").val().trim());
        console.log($("#colorLost").val().trim());
        console.log($("#sexLost").val().trim());
        console.log($("#ageLost").val().trim());
        console.log($("#imgLost").val().trim());

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
