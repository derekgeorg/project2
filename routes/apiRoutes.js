const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const authCheck = require("../config/middleware/authentication");

module.exports = function(app) {
    // Get all strays
    app.get("/api/strays", authCheck, function(req, res) {
        db.Stray.findAll({}).then(function(dbStrays) {
            res.json(dbStrays);
        });
    });
    
    app.post("/api/search", authCheck, function (req, res) {
        console.log(req.body);
        db.Stray.findAll({
            where: {
                [Op.and]: [
                    {type: req.body.type},
                    {
                        color: {
                            [Op.like]: `%${req.body.color}%`
                        }
                    }
                ]
                // [Op.or]: [
                //     {
                //         looks_like: {
                //             [Op.like]: `%${req.body.looks_like}%`
                //         }
                //     }
                // {
                //     sex: req.body.sex
                // },
                // {
                //     age: req.body.age
                // }
                // ]
                // SELECT * FROM post WHERE type = Cat AND color = Black 
                // AND looks_like OR sex OR age;
            }
        }).then(function (dbStrays) {
            res.json(dbStrays);
            // res.render("search", {searchResults: dbStrays});  
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
        });
    });

    // app.post("/api/search", authCheck, function(req, res){
    //     db.Stray.findAll({
    //         where: {
    //             //allowing only one option will be limiting maybe implement a filter by category
    //             type: req.body.type,
    //             color: req.body.color,
    //             sex: req.body.sex
    //         }
    //     }).then(function(dbStrays) {
    //         res.json(dbStrays);
    //         // res.render("search", {pet: dbStrays});
    //     }).then(function (dbStrays) {
    //         res.json(dbStrays);
    //     });
    // });

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
