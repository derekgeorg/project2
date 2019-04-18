const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
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

module.exports = function (app) {
    //WILL ASSUME THAT THE MODEL IS Stray
    app.get("/api/search", authCheck, function (req, res) {
        db.Stray.findAll({
            where: {
                // allowing only one option will be limiting maybe implement a filter by category
                [Op.and]: [
                    {type: req.body.type},
                    {
                        color: {
                            [Op.like]: `%${req.body.color}%`
                        }
                    }
                ],
                [Op.or]: [
                    {
                        looks_like: {
                            [Op.like]: `%${req.body.looks_like}%`
                        }
                    },
                    {
                        sex: req.body.sex
                    },
                    {
                        age: req.body.age
                    }
                ]
                // SELECT * FROM post WHERE type = Cat AND color = Black 
                // AND looks_like OR sex OR age;
            }
        }).then(function (dbStrays) {
            res.render("search", {searchResults: dbStrays});  
        });
    });

    // Saved searches
    app.post("/api/saved", function (req, res) {
        db.Stray.create(req.body).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });

    // modify a report
    app.put("/api/found-pet", function (req, res) {
        db.Stray.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });


    // Get all strays
    app.get("/api/strays", authCheck, function(req, res) {
        db.Stray.findAll({}).then(function(dbStrays) {
            res.render("search", dbStrays);
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
            intake_date: new Date()
        }).then(function (dbStrays) {
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
            intake_date: new Date()
        }).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });
};
