const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const authCheck = require("../config/middleware/authentication");

module.exports = function (app) {
    // Get all strays
    app.get("/api/strays", authCheck, function (req, res) {
        console.log(req.query);
        db.Stray.findAll({}).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });

    // Search database
    app.get("/api/search*", authCheck, function (req, res) {
        db.Stray.findAll({
            where: {
                reunited: false || null,
                type: req.query.pet_type,
                color: {
                    [Op.like]: `%${req.query.color}%`
                },
                sex: {
                    [Op.like]: `% ${req.query.sex}%`
                }
                /*
                [Op.or]: {
                    location:{
                        human_address: {
                            zip: req.query.zip
                        } 
                    },
                    age: req.query.age
                }
                */
            }
        }).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });

    // Saved searches
    app.post("/api/save/search", function (req, res) {
        req.body.UserId = req.user.id;
        
        db.Search.create(req.body).then(function (dbSearch) {
            res.json(dbSearch);
        });
    });

    // modify a report
    app.put("/api/found-pet", function (req, res) {
        db.Stray.update(req.body, {
            where: {
                id: req.body.id
            }
        });
    });

    // modify a report
    app.put("/api/reunited", function (req, res) {
        db.Stray.findOne({
            where: {
                id: req.body.id
            }
        }).then(stray => {
            stray.updateAttributes({
                reunited: true
            });
        });
    });

    // Create a new lost pet
    app.post("/api/lost-pet", authCheck, function (req, res) {
        console.log(req.body);
        db.Stray.create({
            image: {
                url: req.body.image_url
            },
            sex: req.body.sex,
            color: req.body.color,
            location: {
                human_address: {
                    zip: req.body.zip
                }
            },
            type: req.body.pet_type,
            looks_like: req.body.looks_like,
            age: req.body.age,
            intake_date: new Date()
        }).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });

    // Create a new found pet
    app.post("/api/found-pet", authCheck, function (req, res) {
        db.Stray.create({
            image: {
                url: req.body.image_url
            },
            sex: req.body.sex,
            color: req.body.color,
            location: {
                human_address: {
                    zip: req.body.zip
                }
            },
            type: req.body.pet_type,
            looks_like: req.body.looks_like,
            age: req.body.age,
            intake_date: new Date()
        }).then(function (dbStrays) {
            res.json(dbStrays);
        });
    });
};
