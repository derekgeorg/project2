const db = require("../models");
const passport = require("../config/passport");
const authCheck = require("../config/middleware/authentication");


module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    app.get("/login", function(req, res){
        res.render("login", req);
    });

    app.get("/signup", function(req, res){
        res.render("signup", req);
    });

    app.get("/user", authCheck, function(req, res) {
        res.render("user", req);
    });

    app.post("/login", passport.authenticate("local"), function(req, res) {
        console.log("access granted");
        res.json("/user");
    });

    app.post("/signup", function(req, res){
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect("/login");
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};
