const db = require("../models");
const passport = require("../config/passport");
const path = require("path");

module.exports = function (app) {
    
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/dummy", function(req, res) {
        db.Stray.findAll({}).then(function(dbStrays) {
            // res.json(dbStrays);
            res.render("search", {pet: dbStrays});
        });
    });

    app.post("/login", passport.authenticate("local"), function (req, res) {
        res.status(200).json({url:"/api/strays"});
    });

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    app.post("/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.status(200).json({url:"/api/strays"});
        });
    });

    app.get("/search", function (req, res) {
        res.render("search");
    });

    app.get("/lost", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/lost.html"));
    });

    app.get("/found", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/found.html"));
    });


    // Unnecessary unless we want them to be their own page for login and signup
    // app.get("/login", function (req, res) {
    //     res.render("login", req);
    // });

    // app.get("/signup", function (req, res) {
    //     res.render("signup", req);
    // });

    //this authCheck function either redirects to home if not auth (determined by whether a session id exists for the user)
    //or lets the authorized user continue(next()) to the handlebar generated user page
    // app.get("/user", authCheck, function (req, res) {
    //     console.log(req.user);

    //     res.redirect("/api/strays", req);
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};