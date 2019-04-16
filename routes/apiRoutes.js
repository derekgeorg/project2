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
    
    // Create a new stray
    app.post("/api/strays", function(req, res) {
        db.Stray.create(req.body).then(function(dbStray) {
            res.json(dbStray);
        });
    });
 

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
            res.json(dbExample);
        });
    });
};
