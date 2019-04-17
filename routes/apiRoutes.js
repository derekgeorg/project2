var db = require("../models");

module.exports = function(app) {
//WILL ASSUME THAT THE MODEL IS Stray
    app.get("/api/search", function(req, res){
        db.Stray.findAll({
            where: {

                //allowing only one option will be limiting maybe implement a filter by category
                "Looks Like": "Snowshoe Mix",
                Color: req.body.color,
                // Sex: req.body.sex,
                // Age: req.body.age
            }
        }).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });

    app.post("/api/lost-pet", function(req, res){
        db.Stray.create(req.body).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });

    //not sure how we are structuring the data and how we are working with found/reunited pets
    app.put("/api/found-pet", function(req, res) {
        db.Stray.update(req.body, {where: {
            id: req.body.id
        }
        }).then(function(dbStrays){
            res.json(dbStrays);
        });
    });

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
        db.Stray.create(req.body).then(function(dbStrays) {
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
