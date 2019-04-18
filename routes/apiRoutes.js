var db = require("../models");
let data = [
    {
        "id": 40,
        "Found Location": "9302 S 1ST ST\nAUSTIN 78748\n(30.169864, -97.801524)",
        "At AAC": false,
        "Intake Date": "4/10/2019",
        "Type": "Cat",
        "Looks Like": "Snowshoe Mix",
        "Color": "Seal Point",
        "Sex": "Intact Female",
        "Age": "4 weeks",
        "Reunited": "0",
        "Image Link": "http://petharbor.com/get_image.asp?RES=Detail&ID=A744019&LOCATION=ASTN"
    }
];

module.exports = function(app) {
//WILL ASSUME THAT THE MODEL IS Stray
    app.get("/api/search", function(req, res){
        // db.Stray.findAll({
        //     where: {

        //         //allowing only one option will be limiting maybe implement a filter by category
        //         "Looks Like": "Snowshoe Mix",
        //         Color: req.body.color,
        //         // Sex: req.body.sex,
        //         // Age: req.body.age
        //     }
        // }).then(function(dbStrays) {
        res.render("search", {example: data});
        // });
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
