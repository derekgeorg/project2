const db = require("../models");
const authCheck = require("../config/middleware/authentication");


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
    // Get all strays
    app.get("/api/strays", authCheck, function(req, res) {
        db.Stray.findAll({}).then(function(dbStrays) {
            res.render("search", dbStrays);
        });
    });

    app.get("/api/search", authCheck, function(req, res){
        db.Stray.findAll({
            where: {
                //allowing only one option will be limiting maybe implement a filter by category
                type: req.body.type,
                color: req.body.color,
                sex: req.body.sex
            }
        }).then(function(dbStrays) {
            res.render("search", {searchResults: dbStrays});
        });
    });
    
    // Create a new lost pet
    app.post("/api/lost-pet", authCheck, function(req, res) {
        db.Stray.create({
            // Post Image
            // image: req.body.image,
            sex: req.body.sex,
            color: req.body.color,
            // zip code ?
            // location: req.body.location.human_address.zip,
            type: req.body.type,
            looks_like: req.body.looks_like,
            age: req.body.age,
            intake_date: req.body.intake_date,
        }).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });

    // Create a new found pet
    app.post("/api/found-pet", authCheck, function(req, res) {
        db.Stray.create({
            // Post Image
            // image: req.body.image,
            sex: req.body.sex,
            color: req.body.color,
            // zip code ?
            // location: req.body.location.human_address.zip,
            type: req.body.type,
            looks_like: req.body.looks_like,
            age: req.body.age,
            intake_date: req.body.intake_date,
        }).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });
};
