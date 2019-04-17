var db = require("../models");

module.exports = function(app) {
    // Get all examples
    app.get("/api/examples", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.json(dbExamples);
        });
    });

    // Get all strays
    app.get("/api/strays", function(req, res) {
        db.Stray.findAll({}).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });
    // Create a new example
    app.post("/api/examples", function(req, res) {
        db.Example.create(req.body).then(function(dbExample) {
            res.json(dbExample);
        });
    });
    
    // Create a new lost pet
    app.post("/api/lost-pet", function(req, res) {
        db.Stray.create({
            "Found Location": req.body["Found Location"],
            "At AAC": req.body["At AAC"],
            "Intake Date": req.body["Intake Date"],
            "Type": req.body.Type,
            "Looks Like": req.body["Looks Like"],
            "Color": req.body.Color,
            "Sex": req.body.Sex,
            "Age": req.body.Age,
            "Image Link": req.body["Image Link"]
        }).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });
 

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
            res.json(dbExample);
        });
    });
};
