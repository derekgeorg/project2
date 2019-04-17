"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert("Strays", [{
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A788145"
            },
            at_aac: true,
            color: "Black/Tan",
            sex: "Spayed Female",
            animal_id: "A788145",
            location: {
                "latitude": "30.227985",
                "human_address": "{\"address\":\"\",\"city\":\"FARO AUSTIN\",\"state\":\"\",\"zip\":\"78741\"}",
                "needs_recoding": false,
                "longitude": "-97.716971"
            },
            type: "Dog",
            looks_like: "Black/Tan Hound Mix",
            age: "3 years",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792395"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792395",
            location: {
                "latitude": "30.242394",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78725\"}",
                "needs_recoding": false,
                "longitude": "-97.615386"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792432"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792432",
            location: {
                "human_address": "{\"address\":\"ROSEWOOD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "6 weeks",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792433"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792433",
            location: {
                "human_address": "{\"address\":\"ROSEWOOD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "6 weeks",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792448"
            },
            at_aac: false,
            color: "Seal Point",
            sex: "Intact Female",
            animal_id: "A792448",
            location: {
                "latitude": "30.169864",
                "human_address": "{\"address\":\"9302 S 1ST ST\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.801524"
            },
            type: "Cat",
            looks_like: "Snowshoe Mix",
            age: "4 weeks",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792449"
            },
            at_aac: true,
            color: "Black/Brown",
            sex: "Intact Male",
            animal_id: "A792449",
            location: {
                "latitude": "30.159555",
                "human_address": "{\"address\":\"4508 BRANDT RD\",\"city\":\"\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.77136"
            },
            type: "Dog",
            looks_like: "Rottweiler Mix",
            age: "2 years",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792453"
            },
            at_aac: true,
            color: "Black",
            sex: "Neutered Male",
            animal_id: "A792453",
            location: {
                "latitude": "30.412512",
                "human_address": "{\"address\":\"1700 WEST PARMER\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78727\"}",
                "needs_recoding": false,
                "longitude": "-97.688909"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "8 years",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792460"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792460",
            location: {
                "latitude": "30.223369",
                "human_address": "{\"address\":\"2612 EKTOM DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.803765"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792467"
            },
            at_aac: false,
            color: "Brown",
            sex: "Unknown",
            animal_id: "A792467",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792468"
            },
            at_aac: false,
            color: "Brown",
            sex: "Unknown",
            animal_id: "A792468",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792469"
            },
            at_aac: false,
            color: "Brown",
            sex: "Unknown",
            animal_id: "A792469",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792470"
            },
            at_aac: false,
            color: "Brown",
            sex: "Unknown",
            animal_id: "A792470",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792471"
            },
            at_aac: false,
            color: "Brown",
            sex: "Unknown",
            animal_id: "A792471",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792472"
            },
            at_aac: false,
            color: "Brown",
            sex: "Unknown",
            animal_id: "A792472",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792473"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Unknown",
            animal_id: "A792473",
            location: {
                "latitude": "30.384311",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.706726"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792474"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Unknown",
            animal_id: "A792474",
            location: {
                "latitude": "30.384311",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.706726"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792475"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Unknown",
            animal_id: "A792475",
            location: {
                "latitude": "30.384311",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.706726"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792476"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Unknown",
            animal_id: "A792476",
            location: {
                "latitude": "30.384311",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.706726"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792477"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Unknown",
            animal_id: "A792477",
            location: {
                "latitude": "30.384311",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.706726"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792480"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792480",
            location: {
                "latitude": "30.319496",
                "human_address": "{\"address\":\"7418 VINTAGE HILLS DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.666497"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792481"
            },
            at_aac: true,
            color: "Cream",
            sex: "Neutered Male",
            animal_id: "A792481",
            location: {
                "latitude": "30.277852",
                "human_address": "{\"address\":\"3601 E 12TH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78721\"}",
                "needs_recoding": false,
                "longitude": "-97.694102"
            },
            type: "Dog",
            looks_like: "German Shepherd Mix",
            age: "1 year",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792482"
            },
            at_aac: false,
            color: "Calico",
            sex: "Intact Female",
            animal_id: "A792482",
            location: {
                "latitude": "30.319496",
                "human_address": "{\"address\":\"7418 VINTAGE HILLS DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.666497"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792483"
            },
            at_aac: false,
            color: "Tortie",
            sex: "Intact Female",
            animal_id: "A792483",
            location: {
                "latitude": "30.319496",
                "human_address": "{\"address\":\"7418 VINTAGE HILLS DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.666497"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792484"
            },
            at_aac: true,
            color: "Cream",
            sex: "Neutered Male",
            animal_id: "A792484",
            location: {
                "latitude": "30.277852",
                "human_address": "{\"address\":\"3601 E 12TH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78721\"}",
                "needs_recoding": false,
                "longitude": "-97.694102"
            },
            type: "Dog",
            looks_like: "German Shepherd Mix",
            age: "1 year",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792486"
            },
            at_aac: true,
            color: "Black/Brown",
            sex: "Spayed Female",
            animal_id: "A792486",
            location: {
                "human_address": "{\"address\":\"2210 ONION CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "German Shepherd Mix",
            age: "2 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792487"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Male",
            animal_id: "A792487",
            location: {
                "human_address": "{\"address\":\"ANDERSON\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78757\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792494"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792494",
            location: {
                "latitude": "30.158176",
                "human_address": "{\"address\":\"7014 ELROY ROAD\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false,
                "longitude": "-97.642922"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "4 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792498"
            },
            at_aac: false,
            color: "Tricolor",
            sex: "Unknown",
            animal_id: "A792498",
            location: {
                "human_address": "{\"address\":\"5300 MC\",\"city\":\"CANDLESS AUSTIN\",\"state\":\"\",\"zip\":\"78756\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Collie Rough Mix",
            age: "2 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792499"
            },
            at_aac: false,
            color: "Tan/White",
            sex: "Intact Female",
            animal_id: "A792499",
            location: {
                "latitude": "30.310158",
                "human_address": "{\"address\":\"2002 NORTHRIDGE DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.690281"
            },
            type: "Dog",
            looks_like: "Chihuahua Longhair Mix",
            age: "8 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792500"
            },
            at_aac: false,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792500",
            location: {
                "human_address": "{\"address\":\"412 EAST WILLIAM\",\"city\":\"CANNON AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792501"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792501",
            location: {
                "human_address": "{\"address\":\"1156 WEST CESAR\",\"city\":\"CHAVEZ AUSTIN\",\"state\":\"\",\"zip\":\"78703\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "7 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792502"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792502",
            location: {
                "human_address": "{\"address\":\"1156 WEST CESAR\",\"city\":\"CHAVEZ AUSTIN\",\"state\":\"\",\"zip\":\"78703\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "7 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792503"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792503",
            location: {
                "human_address": "{\"address\":\"1156 WEST CESAR\",\"city\":\"CHAVEZ AUSTIN\",\"state\":\"\",\"zip\":\"78703\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "7 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792504"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Female",
            animal_id: "A792504",
            location: {
                "human_address": "{\"address\":\"1156 WEST CESAR\",\"city\":\"CHAVEZ AUSTIN\",\"state\":\"\",\"zip\":\"78703\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "7 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792505"
            },
            at_aac: false,
            color: "Tan/White",
            sex: "Intact Female",
            animal_id: "A792505",
            location: {
                "human_address": "{\"address\":\"1156 WEST CESAR\",\"city\":\"CHAVEZ AUSTIN\",\"state\":\"\",\"zip\":\"78703\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "7 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792513"
            },
            at_aac: false,
            color: "Black",
            sex: "Intact Female",
            animal_id: "A792513",
            location: {
                "latitude": "30.378511",
                "human_address": "{\"address\":\"\",\"city\":\"WALNUT PARK AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.675352"
            },
            type: "Dog",
            looks_like: "Labrador Retriever/Pit Bull",
            age: "6 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792514"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792514",
            location: {
                "latitude": "30.378511",
                "human_address": "{\"address\":\"\",\"city\":\"WALNUT PARK AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.675352"
            },
            type: "Dog",
            looks_like: "Labrador Retriever/Pit Bull",
            age: "6 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792515"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792515",
            location: {
                "latitude": "30.378511",
                "human_address": "{\"address\":\"\",\"city\":\"WALNUT PARK AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.675352"
            },
            type: "Dog",
            looks_like: "Labrador Retriever/Pit Bull",
            age: "6 weeks",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792524"
            },
            at_aac: true,
            color: "Brown Tabby",
            sex: "Intact Female",
            animal_id: "A792524",
            location: {
                "latitude": "30.226736",
                "human_address": "{\"address\":\"1430 FRONTIER VALLEY\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78741\"}",
                "needs_recoding": false,
                "longitude": "-97.693319"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 months",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792528"
            },
            at_aac: false,
            color: "Brown/White",
            sex: "Unknown",
            animal_id: "A792528",
            location: {
                "latitude": "30.455486",
                "human_address": "{\"address\":\"11500 EL SALIDO PARKWAY\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78750\"}",
                "needs_recoding": false,
                "longitude": "-97.819308"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 months",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792531"
            },
            at_aac: true,
            color: "Black",
            sex: "Neutered Male",
            animal_id: "A792531",
            location: {
                "latitude": "30.274312",
                "human_address": "{\"address\":\"1600 EAST 13TH STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.723003"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792532"
            },
            at_aac: true,
            color: "Orange Tabby/White",
            sex: "Intact Male",
            animal_id: "A792532",
            location: {
                "latitude": "30.331232",
                "human_address": "{\"address\":\"1601 E ANDERSON LN\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78752\"}",
                "needs_recoding": false,
                "longitude": "-97.684107"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792533"
            },
            at_aac: false,
            color: "Brown/Silver",
            sex: "Intact Male",
            animal_id: "A792533",
            location: {
                "latitude": "30.169767",
                "human_address": "{\"address\":\"7500 S PLEASANT VALLEY RD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.754017"
            },
            type: "Dog",
            looks_like: "Yorkshire Terrier Mix",
            age: "4 years",
            intake_date: "2019-04-11T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792544"
            },
            at_aac: true,
            color: "Blue/White",
            sex: "Intact Male",
            animal_id: "A792544",
            location: {
                "latitude": "30.264271",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.71608"
            },
            type: "Cat",
            looks_like: "Domestic Medium Hair Mix",
            age: "2 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792563"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792563",
            location: {
                "latitude": "30.410374",
                "human_address": "{\"address\":\"12349 METRIC BOULEVARD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.695828"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792564"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792564",
            location: {
                "latitude": "30.410374",
                "human_address": "{\"address\":\"12349 METRIC BOULEVARD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.695828"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A769343"
            },
            at_aac: false,
            color: "Blue",
            sex: "Neutered Male",
            animal_id: "A769343",
            location: {
                "latitude": "30.236641",
                "human_address": "{\"address\":\"1301 CROSSING PLACE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78741\"}",
                "needs_recoding": false,
                "longitude": "-97.713931"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792579"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Male",
            animal_id: "A792579",
            location: {
                "latitude": "30.175293",
                "human_address": "{\"address\":\"9708 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.823033"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792580"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Male",
            animal_id: "A792580",
            location: {
                "latitude": "30.175293",
                "human_address": "{\"address\":\"9708 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.823033"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792581"
            },
            at_aac: false,
            color: "Cream Tabby/White",
            sex: "Intact Female",
            animal_id: "A792581",
            location: {
                "latitude": "30.175293",
                "human_address": "{\"address\":\"9708 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.823033"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792511"
            },
            at_aac: true,
            color: "Orange/White",
            sex: "Intact Male",
            animal_id: "A792511",
            location: {
                "latitude": "30.172639",
                "human_address": "{\"address\":\"5555 EL MOLINO CIR\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false,
                "longitude": "-97.627882"
            },
            type: "Cat",
            looks_like: "Domestic Medium Hair Mix",
            age: "2 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792590"
            },
            at_aac: true,
            color: "Chocolate/Tan",
            sex: "Intact Female",
            animal_id: "A792590",
            location: {
                "latitude": "30.261891",
                "human_address": "{\"address\":\"2025 EAST 7TH STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.719376"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "4 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792591"
            },
            at_aac: true,
            color: "Tan",
            sex: "Intact Female",
            animal_id: "A792591",
            location: {
                "latitude": "30.261891",
                "human_address": "{\"address\":\"2025 EAST 7TH STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.719376"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "6 months",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792603"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792603",
            location: {
                "latitude": "30.431233",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78726\"}",
                "needs_recoding": false,
                "longitude": "-97.838431"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792605"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792605",
            location: {
                "latitude": "30.431233",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78726\"}",
                "needs_recoding": false,
                "longitude": "-97.838431"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792606"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792606",
            location: {
                "latitude": "30.431233",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78726\"}",
                "needs_recoding": false,
                "longitude": "-97.838431"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792607"
            },
            at_aac: true,
            color: "Brown Tabby",
            sex: "Intact Male",
            animal_id: "A792607",
            location: {
                "latitude": "30.431233",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78726\"}",
                "needs_recoding": false,
                "longitude": "-97.838431"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792613"
            },
            at_aac: true,
            color: "White/Gray",
            sex: "Neutered Male",
            animal_id: "A792613",
            location: {
                "latitude": "30.169486",
                "human_address": "{\"address\":\"280 DRY CREEK RD MANOR\",\"city\":\"\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.990934"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792620"
            },
            at_aac: false,
            color: "Gray/Black",
            sex: "Intact Male",
            animal_id: "A792620",
            location: {
                "latitude": "30.456757",
                "human_address": "{\"address\":\"8101 LULING LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78729\"}",
                "needs_recoding": false,
                "longitude": "-97.759692"
            },
            type: "Dog",
            looks_like: "Siberian Husky",
            age: "2 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792621"
            },
            at_aac: false,
            color: "Black/Tricolor",
            sex: "Intact Male",
            animal_id: "A792621",
            location: {
                "latitude": "30.352148",
                "human_address": "{\"address\":\"13200 MARIE LANE MANOR\",\"city\":\"\",\"state\":\"\",\"zip\":\"78653\"}",
                "needs_recoding": false,
                "longitude": "-97.532724"
            },
            type: "Dog",
            looks_like: "Australian Cattle Dog Mix",
            age: "2 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A790108"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Spayed Female",
            animal_id: "A790108",
            location: {
                "latitude": "30.133512",
                "human_address": "{\"address\":\"12507 SCISSORTAIL DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78652\"}",
                "needs_recoding": false,
                "longitude": "-97.830408"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "10 months",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792623"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792623",
            location: {
                "latitude": "30.358068",
                "human_address": "{\"address\":\"3500 GREYSTONE DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78731\"}",
                "needs_recoding": false,
                "longitude": "-97.749568"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-12T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A744193"
            },
            at_aac: true,
            color: "Tan/White",
            sex: "Intact Male",
            animal_id: "A744193",
            location: {
                "human_address": "{\"address\":\"BURNET ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Cairn Terrier Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A541497"
            },
            at_aac: true,
            color: "White/Brown",
            sex: "Spayed Female",
            animal_id: "A541497",
            location: {
                "latitude": "30.15489",
                "human_address": "{\"address\":\"7224 BLACK PANDA TRAIL\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false,
                "longitude": "-97.643876"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "10 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792634"
            },
            at_aac: true,
            color: "Blue Merle/White",
            sex: "Intact Male",
            animal_id: "A792634",
            location: {
                "latitude": "30.377001",
                "human_address": "{\"address\":\"\",\"city\":\"NACHEZ TRAIL\",\"state\":\"\",\"zip\":\"78734\"}",
                "needs_recoding": false,
                "longitude": "-97.952751"
            },
            type: "Dog",
            looks_like: "Australian Shepherd Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792638"
            },
            at_aac: true,
            color: "Brown Brindle/White",
            sex: "Intact Male",
            animal_id: "A792638",
            location: {
                "human_address": "{\"address\":\"BYERS LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Pug/Beagle",
            age: "4 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792639"
            },
            at_aac: true,
            color: "Cream/White",
            sex: "Intact Female",
            animal_id: "A792639",
            location: {
                "latitude": "30.190891",
                "human_address": "{\"address\":\"6725 CIRCLE S ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.778041"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792640"
            },
            at_aac: true,
            color: "Blue/White",
            sex: "Intact Female",
            animal_id: "A792640",
            location: {
                "latitude": "30.357116",
                "human_address": "{\"address\":\"8502 MAINE DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.711379"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792641"
            },
            at_aac: true,
            color: "Black/Brown",
            sex: "Intact Female",
            animal_id: "A792641",
            location: {
                "human_address": "{\"address\":\"183 AUSTIN\",\"city\":\"\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Anatolian Shepherd/German Shepherd",
            age: "8 weeks",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792642"
            },
            at_aac: true,
            color: "Black/Brown",
            sex: "Intact Female",
            animal_id: "A792642",
            location: {
                "human_address": "{\"address\":\"183 AUSTIN\",\"city\":\"\",\"state\":\"\",\"zip\":\"78728\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Anatolian Shepherd/German Shepherd",
            age: "8 weeks",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792643"
            },
            at_aac: true,
            color: "Brown/Black",
            sex: "Intact Male",
            animal_id: "A792643",
            location: {
                "human_address": "{\"address\":\"183 AUSTIN\",\"city\":\"\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Anatolian Shepherd/German Shepherd",
            age: "8 weeks",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792645"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Female",
            animal_id: "A792645",
            location: {
                "latitude": "30.186349",
                "human_address": "{\"address\":\"\",\"city\":\"ASPEN GLEN DRIVE AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.738673"
            },
            type: "Dog",
            looks_like: "Miniature Poodle Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792646"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Unknown",
            animal_id: "A792646",
            location: {
                "latitude": "30.06663",
                "human_address": "{\"address\":\"9100 EVELYN ROAD\",\"city\":\"\",\"state\":\"\",\"zip\":\"78610\"}",
                "needs_recoding": false,
                "longitude": "-97.681258"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792649"
            },
            at_aac: true,
            color: "Cream Tabby",
            sex: "Intact Male",
            animal_id: "A792649",
            location: {
                "latitude": "30.227985",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78741\"}",
                "needs_recoding": false,
                "longitude": "-97.716971"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792650"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Spayed Female",
            animal_id: "A792650",
            location: {
                "latitude": "30.191444",
                "human_address": "{\"address\":\"6307 BLUFF SPRINGS ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.765715"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "3 months",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792651"
            },
            at_aac: true,
            color: "Red/Tan",
            sex: "Unknown",
            animal_id: "A792651",
            location: {
                "latitude": "30.398419",
                "human_address": "{\"address\":\"12138 NORTH LAMAR\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.679479"
            },
            type: "Dog",
            looks_like: "Siberian Husky",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792658"
            },
            at_aac: true,
            color: "Red",
            sex: "Intact Female",
            animal_id: "A792658",
            location: {
                "latitude": "30.265038",
                "human_address": "{\"address\":\"2131 WILLIAM BARTON DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78746\"}",
                "needs_recoding": false,
                "longitude": "-97.770184"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792659"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792659",
            location: {
                "latitude": "30.096687",
                "human_address": "{\"address\":\"11551 MAHA LOOP ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78734\"}",
                "needs_recoding": false,
                "longitude": "-97.684097"
            },
            type: "Dog",
            looks_like: "Staffordshire Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A782676"
            },
            at_aac: true,
            color: "Brown/Black",
            sex: "Neutered Male",
            animal_id: "A782676",
            location: {
                "human_address": "{\"address\":\"290 AUSTIN\",\"city\":\"\",\"state\":\"\",\"zip\":\"78752\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "German Shepherd Mix",
            age: "10 months",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A791361"
            },
            at_aac: false,
            color: "Black/Gray",
            sex: "Spayed Female",
            animal_id: "A791361",
            location: {
                "latitude": "30.252204",
                "human_address": "{\"address\":\"45 COMAL STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.731588"
            },
            type: "Dog",
            looks_like: "Border Terrier Mix",
            age: "10 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792660"
            },
            at_aac: true,
            color: "Blue/White",
            sex: "Intact Female",
            animal_id: "A792660",
            location: {
                "latitude": "30.096687",
                "human_address": "{\"address\":\"11551 MAHA LOOP ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78734\"}",
                "needs_recoding": false,
                "longitude": "-97.684097"
            },
            type: "Dog",
            looks_like: "Staffordshire Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792663"
            },
            at_aac: true,
            color: "Red/Buff",
            sex: "Intact Male",
            animal_id: "A792663",
            location: {
                "latitude": "30.449905",
                "human_address": "{\"address\":\"\",\"city\":\"SAN CHISOLM AUSTIN\",\"state\":\"\",\"zip\":\"78660\"}",
                "needs_recoding": false,
                "longitude": "-97.613157"
            },
            type: "Dog",
            looks_like: "Siberian Husky",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792666"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792666",
            location: {
                "latitude": "30.262272",
                "human_address": "{\"address\":\"1912 E 7TH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.721066"
            },
            type: "Dog",
            looks_like: "Pointer Mix",
            age: "3 months",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792671"
            },
            at_aac: false,
            color: "Tan/White",
            sex: "Intact Male",
            animal_id: "A792671",
            location: {
                "latitude": "30.19201",
                "human_address": "{\"address\":\"5801 TERI ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.731754"
            },
            type: "Dog",
            looks_like: "Rat Terrier/Chihuahua Shorthair",
            age: "1 year",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A788990"
            },
            at_aac: false,
            color: "Brown Brindle",
            sex: "Neutered Male",
            animal_id: "A788990",
            location: {
                "latitude": "30.173797",
                "human_address": "{\"address\":\"1213 WEST SLAUGHTER LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.814082"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "1 year",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792676"
            },
            at_aac: false,
            color: "Blue Tabby",
            sex: "Neutered Male",
            animal_id: "A792676",
            location: {
                "latitude": "30.341682",
                "human_address": "{\"address\":\"8906 WALL STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.670596"
            },
            type: "Cat",
            looks_like: "American Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792679"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Female",
            animal_id: "A792679",
            location: {
                "latitude": "30.159505",
                "human_address": "{\"address\":\"10613 ETTA LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.81841"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792680"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Male",
            animal_id: "A792680",
            location: {
                "latitude": "30.159505",
                "human_address": "{\"address\":\"10613 ETTA LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.81841"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792681"
            },
            at_aac: false,
            color: "Brown Tabby/White",
            sex: "Intact Female",
            animal_id: "A792681",
            location: {
                "latitude": "30.159505",
                "human_address": "{\"address\":\"10613 ETTA LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.81841"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792682"
            },
            at_aac: false,
            color: "Cream",
            sex: "Spayed Female",
            animal_id: "A792682",
            location: {
                "latitude": "30.345865",
                "human_address": "{\"address\":\"\",\"city\":\"GREAT FALLS MANOR\",\"state\":\"\",\"zip\":\"78653\"}",
                "needs_recoding": false,
                "longitude": "-97.531473"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "8 years",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792683"
            },
            at_aac: true,
            color: "Brown Brindle/White",
            sex: "Intact Male",
            animal_id: "A792683",
            location: {
                "latitude": "30.332056",
                "human_address": "{\"address\":\"7215 BENNETT\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78752\"}",
                "needs_recoding": false,
                "longitude": "-97.699814"
            },
            type: "Dog",
            looks_like: "Plott Hound Mix",
            age: "3 months",
            intake_date: "2019-04-13T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792691"
            },
            at_aac: true,
            color: "Gray/Black",
            sex: "Intact Male",
            animal_id: "A792691",
            location: {
                "human_address": "{\"address\":\"6607 WEST WILLIAM\",\"city\":\"CANNON AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Siberian Husky",
            age: "4 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792693"
            },
            at_aac: true,
            color: "Apricot",
            sex: "Intact Female",
            animal_id: "A792693",
            location: {
                "human_address": "{\"address\":\"THISTLE HILL WAY\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Miniature Poodle Mix",
            age: "9 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792694"
            },
            at_aac: true,
            color: "Blue",
            sex: "Intact Female",
            animal_id: "A792694",
            location: {
                "latitude": "30.421307",
                "human_address": "{\"address\":\"13308 KIRKGLEN ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78727\"}",
                "needs_recoding": false,
                "longitude": "-97.679729"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792695"
            },
            at_aac: false,
            color: "Brown/Black",
            sex: "Intact Female",
            animal_id: "A792695",
            location: {
                "latitude": "30.295025",
                "human_address": "{\"address\":\"\",\"city\":\"NELSON OAKS DRIVE AUSTIN\",\"state\":\"\",\"zip\":\"78724\"}",
                "needs_recoding": false,
                "longitude": "-97.622435"
            },
            type: "Dog",
            looks_like: "German Shepherd/Border Collie",
            age: "9 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792696"
            },
            at_aac: true,
            color: "Black",
            sex: "Unknown",
            animal_id: "A792696",
            location: {
                "human_address": "{\"address\":\"CAMERON\",\"city\":\"LEAF AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792697"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792697",
            location: {
                "latitude": "30.166107",
                "human_address": "{\"address\":\"\",\"city\":\"NIGHTJAR DRIVE AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.825259"
            },
            type: "Dog",
            looks_like: "Bull Terrier Miniature Mix",
            age: "1 year",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792699"
            },
            at_aac: true,
            color: "Black Tiger",
            sex: "Intact Female",
            animal_id: "A792699",
            location: {
                "latitude": "30.374102",
                "human_address": "{\"address\":\"2018 WEST RUNDBERG LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.719404"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792700"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792700",
            location: {
                "latitude": "30.374102",
                "human_address": "{\"address\":\"2018 WEST RUNDBERG LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78758\"}",
                "needs_recoding": false,
                "longitude": "-97.719404"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792704"
            },
            at_aac: true,
            color: "Black/Brown",
            sex: "Unknown",
            animal_id: "A792704",
            location: {
                "latitude": "30.359403",
                "human_address": "{\"address\":\"3604 SAVAGE SPRINGS DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.639093"
            },
            type: "Dog",
            looks_like: "Beagle/American Foxhound",
            age: "5 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792708"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Neutered Male",
            animal_id: "A792708",
            location: {
                "latitude": "30.440938",
                "human_address": "{\"address\":\"1420 WEST WELLS BRANCH PARKWAY\",\"city\":\"PFLUGERVILLE\",\"state\":\"\",\"zip\":\"78660\"}",
                "needs_recoding": false,
                "longitude": "-97.663588"
            },
            type: "Cat",
            looks_like: "Domestic Medium Hair Mix",
            age: "2 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A722024"
            },
            at_aac: false,
            color: "Gold",
            sex: "Spayed Female",
            animal_id: "A722024",
            location: {
                "latitude": "30.133523",
                "human_address": "{\"address\":\"\",\"city\":\"THAXTON ROAD AUSTIN\",\"state\":\"\",\"zip\":\"78747\"}",
                "needs_recoding": false,
                "longitude": "-97.757228"
            },
            type: "Dog",
            looks_like: "Golden Retriever Mix",
            age: "10 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792713"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Female",
            animal_id: "A792713",
            location: {
                "human_address": "{\"address\":\"2955 HIGHWAY\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792720"
            },
            at_aac: false,
            color: "Red/White",
            sex: "Intact Male",
            animal_id: "A792720",
            location: {
                "latitude": "30.359682",
                "human_address": "{\"address\":\"1402 MEADOWMEAR\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.672003"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "1 year",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792721"
            },
            at_aac: true,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792721",
            location: {
                "latitude": "30.381327",
                "human_address": "{\"address\":\"11511 NORTH OAKS DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673154"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792722"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792722",
            location: {
                "latitude": "30.39307",
                "human_address": "{\"address\":\"12118 WALNUT PARK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.676452"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "5 weeks",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792723"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792723",
            location: {
                "latitude": "30.39307",
                "human_address": "{\"address\":\"12118 WALNUT PARK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.676452"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "5 weeks",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792725"
            },
            at_aac: false,
            color: "Orange Tabby/White",
            sex: "Intact Female",
            animal_id: "A792725",
            location: {
                "latitude": "30.415409",
                "human_address": "{\"address\":\"7405 CARISSA COVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false,
                "longitude": "-97.776047"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792726"
            },
            at_aac: false,
            color: "Orange Tabby/White",
            sex: "Intact Female",
            animal_id: "A792726",
            location: {
                "latitude": "30.415409",
                "human_address": "{\"address\":\"7405 CARISSA COVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false,
                "longitude": "-97.776047"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792727"
            },
            at_aac: false,
            color: "Orange Tabby/White",
            sex: "Intact Male",
            animal_id: "A792727",
            location: {
                "latitude": "30.415409",
                "human_address": "{\"address\":\"7405 CARISSA COVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false,
                "longitude": "-97.776047"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792728"
            },
            at_aac: false,
            color: "Flame Point",
            sex: "Intact Male",
            animal_id: "A792728",
            location: {
                "latitude": "30.415409",
                "human_address": "{\"address\":\"7405 CARISSA COVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false,
                "longitude": "-97.776047"
            },
            type: "Cat",
            looks_like: "Siamese Mix",
            age: "4 weeks",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792730"
            },
            at_aac: false,
            color: "Red/White",
            sex: "Intact Female",
            animal_id: "A792730",
            location: {
                "latitude": "30.243217",
                "human_address": "{\"address\":\"\",\"city\":\"FLETCHER LANE AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.76448"
            },
            type: "Dog",
            looks_like: "Siberian Husky Mix",
            age: "2 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A744019"
            },
            at_aac: false,
            color: "Blue/White",
            sex: "Neutered Male",
            animal_id: "A744019",
            location: {
                "latitude": "30.206782",
                "human_address": "{\"address\":\"\",\"city\":\"WOODHUE DRIVE AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.798214"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792733"
            },
            at_aac: false,
            color: "Brown Brindle/White",
            sex: "Intact Male",
            animal_id: "A792733",
            location: {
                "latitude": "30.16988",
                "human_address": "{\"address\":\"7316 FIREFLY DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.74963"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "9 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792734"
            },
            at_aac: false,
            color: "Red",
            sex: "Intact Male",
            animal_id: "A792734",
            location: {
                "latitude": "30.250468",
                "human_address": "{\"address\":\"2627 BARTON HILLS DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.795274"
            },
            type: "Dog",
            looks_like: "Irish Setter/German Shorthair Pointer",
            age: "2 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792735"
            },
            at_aac: false,
            color: "Brown Brindle/White",
            sex: "Intact Male",
            animal_id: "A792735",
            location: {
                "latitude": "30.491995",
                "human_address": "{\"address\":\"106 BRUSHY CREEK TRAIL\",\"city\":\"PFLUGERVILLE\",\"state\":\"\",\"zip\":\"78634\"}",
                "needs_recoding": false,
                "longitude": "-97.535981"
            },
            type: "Dog",
            looks_like: "Black Mouth Cur Mix",
            age: "5 years",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792737"
            },
            at_aac: true,
            color: "White/Brown",
            sex: "Intact Female",
            animal_id: "A792737",
            location: {
                "human_address": "{\"address\":\"2810 W PARMER LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78727\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Pointer Mix",
            age: "7 months",
            intake_date: "2019-04-14T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A700551"
            },
            at_aac: true,
            color: "Blue/White",
            sex: "Spayed Female",
            animal_id: "A700551",
            location: {
                "latitude": "30.316452",
                "human_address": "{\"address\":\"1106 REINLI STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.702912"
            },
            type: "Dog",
            looks_like: "Pointer/Pit Bull",
            age: "4 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A775940"
            },
            at_aac: true,
            color: "Brown Brindle/White",
            sex: "Neutered Male",
            animal_id: "A775940",
            location: {
                "human_address": "{\"address\":\"SOUTH PLEASANT VALLEY ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Plott Hound/Labrador Retriever",
            age: "11 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792745"
            },
            at_aac: true,
            color: "Tricolor",
            sex: "Intact Male",
            animal_id: "A792745",
            location: {
                "latitude": "30.445495",
                "human_address": "{\"address\":\"14603 TOWN HILL DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78728\"}",
                "needs_recoding": false,
                "longitude": "-97.685005"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "3 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792746"
            },
            at_aac: true,
            color: "Sable/Tan",
            sex: "Intact Female",
            animal_id: "A792746",
            location: {
                "latitude": "30.178706",
                "human_address": "{\"address\":\"4505 MAGIN MEADOW DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.75814"
            },
            type: "Dog",
            looks_like: "Australian Terrier/Standard Schnauzer",
            age: "4 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792758"
            },
            at_aac: true,
            color: "Tan/Silver",
            sex: "Intact Female",
            animal_id: "A792758",
            location: {
                "latitude": "30.270035",
                "human_address": "{\"address\":\"1137 GUNTER STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78721\"}",
                "needs_recoding": false,
                "longitude": "-97.69652"
            },
            type: "Dog",
            looks_like: "Yorkshire Terrier Mix",
            age: "5 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792759"
            },
            at_aac: true,
            color: "Black Smoke/White",
            sex: "Intact Male",
            animal_id: "A792759",
            location: {
                "human_address": "{\"address\":\"EAST 2ND\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Catahoula Mix",
            age: "3 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792762"
            },
            at_aac: true,
            color: "Orange Tabby/White",
            sex: "Intact Male",
            animal_id: "A792762",
            location: {
                "latitude": "30.169272",
                "human_address": "{\"address\":\"12320 SKY HARBOR\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false,
                "longitude": "-97.62959"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792765"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792765",
            location: {
                "latitude": "30.239265",
                "human_address": "{\"address\":\"2515 ELMONT ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78741\"}",
                "needs_recoding": false,
                "longitude": "-97.720548"
            },
            type: "Dog",
            looks_like: "Labrador Retriever/Boxer",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792766"
            },
            at_aac: true,
            color: "Orange Tabby/White",
            sex: "Neutered Male",
            animal_id: "A792766",
            location: {
                "latitude": "30.243463",
                "human_address": "{\"address\":\"604 FLETCHER\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.75888"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792768"
            },
            at_aac: false,
            color: "Orange",
            sex: "Intact Female",
            animal_id: "A792768",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792773"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792773",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792774"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792774",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792775"
            },
            at_aac: false,
            color: "Orange Tabby/White",
            sex: "Intact Male",
            animal_id: "A792775",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792776"
            },
            at_aac: false,
            color: "Orange Tabby/White",
            sex: "Intact Female",
            animal_id: "A792776",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792777"
            },
            at_aac: false,
            color: "Orange Tabby",
            sex: "Intact Female",
            animal_id: "A792777",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792778"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792778",
            location: {
                "latitude": "30.223883",
                "human_address": "{\"address\":\"1401 S 973\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78725\"}",
                "needs_recoding": false,
                "longitude": "-97.632827"
            },
            type: "Dog",
            looks_like: "Labrador Retriever/Great Pyrenees",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792779"
            },
            at_aac: false,
            color: "Cream Tabby",
            sex: "Intact Male",
            animal_id: "A792779",
            location: {
                "latitude": "30.356752",
                "human_address": "{\"address\":\"9805 HALIFAX DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false,
                "longitude": "-97.673957"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "0 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792780"
            },
            at_aac: true,
            color: "Brown Tabby",
            sex: "Intact Male",
            animal_id: "A792780",
            location: {
                "human_address": "{\"address\":\"9311 N 620 RD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78726\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "6 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792783"
            },
            at_aac: false,
            color: "Blue",
            sex: "Intact Male",
            animal_id: "A792783",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792784"
            },
            at_aac: false,
            color: "Lilac Point",
            sex: "Intact Female",
            animal_id: "A792784",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792785"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792785",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792786"
            },
            at_aac: false,
            color: "Blue Tabby",
            sex: "Intact Male",
            animal_id: "A792786",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792788"
            },
            at_aac: true,
            color: "Chocolate",
            sex: "Intact Female",
            animal_id: "A792788",
            location: {
                "human_address": "{\"address\":\"3421 W WILLIAM\",\"city\":\"CANNON AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "8 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792789"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Intact Female",
            animal_id: "A792789",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792790"
            },
            at_aac: false,
            color: "Blue Tabby",
            sex: "Intact Female",
            animal_id: "A792790",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792795"
            },
            at_aac: false,
            color: "Brown Tabby",
            sex: "Intact Male",
            animal_id: "A792795",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792799"
            },
            at_aac: true,
            color: "Torbie",
            sex: "Intact Female",
            animal_id: "A792799",
            location: {
                "latitude": "30.426879",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78727\"}",
                "needs_recoding": false,
                "longitude": "-97.713462"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "9 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792800"
            },
            at_aac: true,
            color: "Brown Tabby",
            sex: "Intact Female",
            animal_id: "A792800",
            location: {
                "latitude": "30.243993",
                "human_address": "{\"address\":\"117 KIMBLE LN\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78742\"}",
                "needs_recoding": false,
                "longitude": "-97.685495"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792801"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Female",
            animal_id: "A792801",
            location: {
                "human_address": "{\"address\":\"4557 EAST HIGHWAY\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Chow Chow Mix",
            age: "5 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792802"
            },
            at_aac: true,
            color: "Sable/Tan",
            sex: "Intact Female",
            animal_id: "A792802",
            location: {
                "human_address": "{\"address\":\"4557 EAST HIWAY\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Siberian Husky Mix",
            age: "5 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792803"
            },
            at_aac: true,
            color: "Brown Brindle/White",
            sex: "Spayed Female",
            animal_id: "A792803",
            location: {
                "human_address": "{\"address\":\"NORTH LAMAR\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Dachshund Mix",
            age: "2 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792807"
            },
            at_aac: false,
            color: "Chocolate",
            sex: "Intact Female",
            animal_id: "A792807",
            location: {
                "latitude": "30.212873",
                "human_address": "{\"address\":\"3312 WESTERN DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.826837"
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "10 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792808"
            },
            at_aac: false,
            color: "Black",
            sex: "Unknown",
            animal_id: "A792808",
            location: {
                "latitude": "30.367467",
                "human_address": "{\"address\":\"11806 SAMSUNG\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.635104"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792810"
            },
            at_aac: false,
            color: "Buff",
            sex: "Intact Male",
            animal_id: "A792810",
            location: {
                "human_address": "{\"address\":\"183 AND\",\"city\":\"GEORGIAN AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Miniature Poodle Mix",
            age: "7 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792811"
            },
            at_aac: false,
            color: "Black/Tricolor",
            sex: "Intact Male",
            animal_id: "A792811",
            location: {
                "human_address": "{\"address\":\"8220 SOUTH IH\",\"city\":\"\",\"state\":\"\",\"zip\":\"78739\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Greater Swiss Mountain Dog",
            age: "2 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792812"
            },
            at_aac: false,
            color: "Brown Brindle",
            sex: "Intact Female",
            animal_id: "A792812",
            location: {
                "latitude": "30.423759",
                "human_address": "{\"address\":\"13208 RAMPART STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78727\"}",
                "needs_recoding": false,
                "longitude": "-97.68633"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792822"
            },
            at_aac: true,
            color: "Red",
            sex: "Intact Male",
            animal_id: "A792822",
            location: {
                "human_address": "{\"address\":\"969 AND BULLACE STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78725\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "English Cocker Spaniel",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792823"
            },
            at_aac: false,
            color: "White",
            sex: "Unknown",
            animal_id: "A792823",
            location: {
                "latitude": "30.300258",
                "human_address": "{\"address\":\"5613 SPRINGDALE ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.673438"
            },
            type: "Dog",
            looks_like: "Miniature Schnauzer Mix",
            age: "2 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792826"
            },
            at_aac: true,
            color: "Blue Tabby",
            sex: "Intact Female",
            animal_id: "A792826",
            location: {
                "human_address": "{\"address\":\"400 WEST SAINT\",\"city\":\"ELMO AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792827"
            },
            at_aac: true,
            color: "Brown Tabby/White",
            sex: "Intact Female",
            animal_id: "A792827",
            location: {
                "latitude": "30.298444",
                "human_address": "{\"address\":\"621 WEST 31ST STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78705\"}",
                "needs_recoding": false,
                "longitude": "-97.742393"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "4 weeks",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792828"
            },
            at_aac: false,
            color: "White",
            sex: "Unknown",
            animal_id: "A792828",
            location: {
                "latitude": "30.300258",
                "human_address": "{\"address\":\"5613 SPRINGDALE ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.673438"
            },
            type: "Dog",
            looks_like: "Miniature Schnauzer Mix",
            age: "2 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792829"
            },
            at_aac: false,
            color: "Black/Brown",
            sex: "Intact Female",
            animal_id: "A792829",
            location: {
                "human_address": "{\"address\":\"8014 RUNNING\",\"city\":\"WATER AUSTIN\",\"state\":\"\",\"zip\":\"78747\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "German Shepherd Mix",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792830"
            },
            at_aac: true,
            color: "Tan/Black",
            sex: "Intact Female",
            animal_id: "A792830",
            location: {
                "latitude": "30.399451",
                "human_address": "{\"address\":\"13021 DESSAU ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.641014"
            },
            type: "Dog",
            looks_like: "Anatolian Shepherd Mix",
            age: "3 months",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792832"
            },
            at_aac: true,
            color: "White/Black",
            sex: "Intact Female",
            animal_id: "A792832",
            location: {
                "human_address": "{\"address\":\"NORTH LAMAR\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78759\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Australian Cattle Dog Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792836"
            },
            at_aac: true,
            color: "Tan/Black",
            sex: "Intact Female",
            animal_id: "A792836",
            location: {
                "latitude": "30.184561",
                "human_address": "{\"address\":\"2400 LAKEHURST DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.756782"
            },
            type: "Dog",
            looks_like: "Belgian Malinois",
            age: "2 months",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792839"
            },
            at_aac: false,
            color: "Tortie/White",
            sex: "Intact Female",
            animal_id: "A792839",
            location: {
                "latitude": "30.237892",
                "human_address": "{\"address\":\"2103 GLENDALE PLACE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.742741"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792840"
            },
            at_aac: false,
            color: "Tricolor",
            sex: "Intact Male",
            animal_id: "A792840",
            location: {
                "human_address": "{\"address\":\"1826 AUSTIN\",\"city\":\"\",\"state\":\"\",\"zip\":\"78739\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Bernese Mountain Dog",
            age: "1 year",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792845"
            },
            at_aac: true,
            color: "Blue Tabby",
            sex: "Unknown",
            animal_id: "A792845",
            location: {
                "latitude": "30.470274",
                "human_address": "{\"address\":\"11066 PECAN PARK CEDAR PARK\",\"city\":\"\",\"state\":\"\",\"zip\":\"78613\"}",
                "needs_recoding": false,
                "longitude": "-97.802145"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792846"
            },
            at_aac: true,
            color: "Brown Tabby",
            sex: "Intact Female",
            animal_id: "A792846",
            location: {
                "latitude": "30.170803",
                "human_address": "{\"address\":\"10025 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.82479"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792847"
            },
            at_aac: true,
            color: "Cream Tabby",
            sex: "Intact Male",
            animal_id: "A792847",
            location: {
                "latitude": "30.170803",
                "human_address": "{\"address\":\"10025 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.82479"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792848"
            },
            at_aac: true,
            color: "Calico",
            sex: "Intact Female",
            animal_id: "A792848",
            location: {
                "latitude": "30.170803",
                "human_address": "{\"address\":\"10025 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.82479"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792849"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792849",
            location: {
                "latitude": "30.170803",
                "human_address": "{\"address\":\"10025 MANCHACA ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.82479"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "3 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792850"
            },
            at_aac: true,
            color: "Blue Tabby",
            sex: "Unknown",
            animal_id: "A792850",
            location: {
                "latitude": "30.294101",
                "human_address": "{\"address\":\"3714 ROBINSON AVENUE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78722\"}",
                "needs_recoding": false,
                "longitude": "-97.718719"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "5 months",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792851"
            },
            at_aac: true,
            color: "Blue Tabby",
            sex: "Unknown",
            animal_id: "A792851",
            location: {
                "latitude": "30.470274",
                "human_address": "{\"address\":\"11066 PECAN PARK CEDAR PARK\",\"city\":\"\",\"state\":\"\",\"zip\":\"78613\"}",
                "needs_recoding": false,
                "longitude": "-97.802145"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792852"
            },
            at_aac: true,
            color: "Blue Tabby",
            sex: "Unknown",
            animal_id: "A792852",
            location: {
                "latitude": "30.470274",
                "human_address": "{\"address\":\"11066 PECAN PARK CEDAR PARK\",\"city\":\"\",\"state\":\"\",\"zip\":\"78613\"}",
                "needs_recoding": false,
                "longitude": "-97.802145"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792853"
            },
            at_aac: true,
            color: "Blue Tabby",
            sex: "Unknown",
            animal_id: "A792853",
            location: {
                "latitude": "30.470274",
                "human_address": "{\"address\":\"11066 PECAN PARK CEDAR PARK\",\"city\":\"\",\"state\":\"\",\"zip\":\"78613\"}",
                "needs_recoding": false,
                "longitude": "-97.802145"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A738561"
            },
            at_aac: false,
            color: "Blue/White",
            sex: "Neutered Male",
            animal_id: "A738561",
            location: {
                "latitude": "30.203633",
                "human_address": "{\"address\":\"1650 CHIPPEWAY LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.799671"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "5 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792424"
            },
            at_aac: true,
            color: "White",
            sex: "Intact Male",
            animal_id: "A792424",
            location: {
                "human_address": "{\"address\":\"WILLIAMSON ROAD\",\"city\":\"\",\"state\":\"\",\"zip\":\"78610\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Labrador Retriever Mix",
            age: "1 year",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792767"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Neutered Male",
            animal_id: "A792767",
            location: {
                "human_address": "{\"address\":\"38 AND HALF STREET\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78722\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Longhair Mix",
            age: "8 years",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792791"
            },
            at_aac: true,
            color: "Gray/White",
            sex: "Intact Female",
            animal_id: "A792791",
            location: {
                "human_address": "{\"address\":\"9300 S IH\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Medium Hair Mix",
            age: "1 year",
            intake_date: "2019-04-15T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792856"
            },
            at_aac: true,
            color: "Chocolate/White",
            sex: "Intact Male",
            animal_id: "A792856",
            location: {
                "latitude": "30.173706",
                "human_address": "{\"address\":\"4503 QUICKSILVER\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.761319"
            },
            type: "Dog",
            looks_like: "Pointer Mix",
            age: "1 year",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792859"
            },
            at_aac: false,
            color: "Gray/Black",
            sex: "Unknown",
            animal_id: "A792859",
            location: {
                "latitude": "30.188614",
                "human_address": "{\"address\":\"2809 KENTISH DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.831002"
            },
            type: "Dog",
            looks_like: "Siberian Husky Mix",
            age: "7 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792860"
            },
            at_aac: true,
            color: "Brown",
            sex: "Intact Male",
            animal_id: "A792860",
            location: {
                "latitude": "30.238771",
                "human_address": "{\"address\":\"2613 SOUTH FIRST\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.761748"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair Mix",
            age: "5 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792861"
            },
            at_aac: false,
            color: "Blue/White",
            sex: "Intact Female",
            animal_id: "A792861",
            location: {
                "latitude": "30.188614",
                "human_address": "{\"address\":\"2809 KENTISH DRIVE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.831002"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792862"
            },
            at_aac: false,
            color: "Brown/White",
            sex: "Intact Male",
            animal_id: "A792862",
            location: {
                "latitude": "30.196795",
                "human_address": "{\"address\":\"2001 LEAR LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.8098"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792863"
            },
            at_aac: true,
            color: "Tan/Black",
            sex: "Intact Female",
            animal_id: "A792863",
            location: {
                "human_address": "{\"address\":\"BATTLE BEND BOULEVARD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Lhasa Apso Mix",
            age: "12 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792864"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792864",
            location: {
                "latitude": "30.175226",
                "human_address": "{\"address\":\"5401 ROSS RD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false,
                "longitude": "-97.619515"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792865"
            },
            at_aac: true,
            color: "Orange Tabby",
            sex: "Intact Male",
            animal_id: "A792865",
            location: {
                "human_address": "{\"address\":\"ROSEWOOD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "American Shorthair Mix",
            age: "6 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792866"
            },
            at_aac: true,
            color: "Brown Brindle",
            sex: "Intact Female",
            animal_id: "A792866",
            location: {
                "latitude": "30.194269",
                "human_address": "{\"address\":\"5106 NUCKOLS CROSSING\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.738204"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792867"
            },
            at_aac: true,
            color: "Black",
            sex: "Intact Male",
            animal_id: "A792867",
            location: {
                "latitude": "30.194269",
                "human_address": "{\"address\":\"5106 NUCKOLS CROSSING\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.738204"
            },
            type: "Dog",
            looks_like: "Pit Bull Mix",
            age: "3 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792871"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Unknown",
            animal_id: "A792871",
            location: {
                "human_address": "{\"address\":\"715 KING\",\"city\":\"EDWARDS AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792872"
            },
            at_aac: true,
            color: "White",
            sex: "Intact Male",
            animal_id: "A792872",
            location: {
                "latitude": "30.270035",
                "human_address": "{\"address\":\"1137 GUNTER\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78721\"}",
                "needs_recoding": false,
                "longitude": "-97.69652"
            },
            type: "Cat",
            looks_like: "Manx Mix",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792873"
            },
            at_aac: false,
            color: "Black/White",
            sex: "Intact Female",
            animal_id: "A792873",
            location: {
                "latitude": "30.22772",
                "human_address": "{\"address\":\"121 PICKLE ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.762786"
            },
            type: "Dog",
            looks_like: "Beagle Mix",
            age: "8 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792874"
            },
            at_aac: false,
            color: "Brown/White",
            sex: "Intact Male",
            animal_id: "A792874",
            location: {
                "latitude": "30.22772",
                "human_address": "{\"address\":\"121 PICKLE ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78704\"}",
                "needs_recoding": false,
                "longitude": "-97.762786"
            },
            type: "Dog",
            looks_like: "Beagle Mix",
            age: "8 weeks",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A447792"
            },
            at_aac: true,
            color: "Buff",
            sex: "Neutered Male",
            animal_id: "A447792",
            location: {
                "latitude": "30.206782",
                "human_address": "{\"address\":\"\",\"city\":\"WESTMORELAND AUSTIN\",\"state\":\"\",\"zip\":\"78745\"}",
                "needs_recoding": false,
                "longitude": "-97.798214"
            },
            type: "Dog",
            looks_like: "Cairn Terrier Mix",
            age: "13 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A675336"
            },
            at_aac: true,
            color: "Silver",
            sex: "Spayed Female",
            animal_id: "A675336",
            location: {
                "latitude": "30.299444",
                "human_address": "{\"address\":\"5605 SPRINGDALE ROAD\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78723\"}",
                "needs_recoding": false,
                "longitude": "-97.673969"
            },
            type: "Dog",
            looks_like: "Standard Schnauzer Mix",
            age: "9 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792397"
            },
            at_aac: true,
            color: "Black/Tan",
            sex: "Intact Male",
            animal_id: "A792397",
            location: {
                "latitude": "30.131655",
                "human_address": "{\"address\":\"8501 LINDON ROAD\",\"city\":\"\",\"state\":\"\",\"zip\":\"78617\"}",
                "needs_recoding": false,
                "longitude": "-97.591404"
            },
            type: "Dog",
            looks_like: "German Shepherd Mix",
            age: "11 months",
            intake_date: "2019-04-10T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792894"
            },
            at_aac: true,
            color: "Red",
            sex: "Intact Male",
            animal_id: "A792894",
            location: {
                "latitude": "30.166107",
                "human_address": "{\"address\":\"\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78748\"}",
                "needs_recoding": false,
                "longitude": "-97.825259"
            },
            type: "Dog",
            looks_like: "Chihuahua Shorthair",
            age: "2 years",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792896"
            },
            at_aac: true,
            color: "Calico Point/Cream",
            sex: "Intact Female",
            animal_id: "A792896",
            location: {
                "latitude": "30.254526",
                "human_address": "{\"address\":\"730 SHADY LANE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78702\"}",
                "needs_recoding": false,
                "longitude": "-97.696805"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 year",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792897"
            },
            at_aac: true,
            color: "Orange Tabby",
            sex: "Unknown",
            animal_id: "A792897",
            location: {
                "latitude": "30.182179",
                "human_address": "{\"address\":\"2412 BITTER CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.757294"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792898"
            },
            at_aac: true,
            color: "Orange Tabby",
            sex: "Unknown",
            animal_id: "A792898",
            location: {
                "latitude": "30.182179",
                "human_address": "{\"address\":\"2412 BITTER CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.757294"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792899"
            },
            at_aac: true,
            color: "Orange Tabby",
            sex: "Unknown",
            animal_id: "A792899",
            location: {
                "latitude": "30.182179",
                "human_address": "{\"address\":\"2412 BITTER CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.757294"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792900"
            },
            at_aac: true,
            color: "White/Brown",
            sex: "Intact Male",
            animal_id: "A792900",
            location: {
                "latitude": "30.356927",
                "human_address": "{\"address\":\"\",\"city\":\"PAYTON FALLS DRIVE AUSTIN\",\"state\":\"\",\"zip\":\"78754\"}",
                "needs_recoding": false,
                "longitude": "-97.643722"
            },
            type: "Dog",
            looks_like: "Anatolian Shepherd Mix",
            age: "2 months",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792901"
            },
            at_aac: true,
            color: "Black",
            sex: "Unknown",
            animal_id: "A792901",
            location: {
                "latitude": "30.182179",
                "human_address": "{\"address\":\"2412 BITTER CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.757294"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792902"
            },
            at_aac: true,
            color: "Buff",
            sex: "Unknown",
            animal_id: "A792902",
            location: {
                "latitude": "30.182179",
                "human_address": "{\"address\":\"2412 BITTER CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.757294"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792903"
            },
            at_aac: true,
            color: "Calico",
            sex: "Unknown",
            animal_id: "A792903",
            location: {
                "latitude": "30.182179",
                "human_address": "{\"address\":\"2412 BITTER CREEK\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78744\"}",
                "needs_recoding": false,
                "longitude": "-97.757294"
            },
            type: "Cat",
            looks_like: "Domestic Shorthair Mix",
            age: "1 week",
            intake_date: "2019-04-16T00:00:00"
        }
            , {
            image: {
                "url": "http://www.petharbor.com/pet.asp?uaid=ASTN.A792904"
            },
            at_aac: true,
            color: "Black/White",
            sex: "Intact Male",
            animal_id: "A792904",
            location: {
                "human_address": "{\"address\":\"9808 CROWNRIDGE\",\"city\":\"AUSTIN\",\"state\":\"\",\"zip\":\"78753\"}",
                "needs_recoding": false
            },
            type: "Dog",
            looks_like: "Pointer Mix",
            age: "4 months",
            intake_date: "2019-04-16T00:00:00"
        }], {
            image: {
                type: new Sequelize.JSON()
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkDelete('People', null, {});
          */
        return queryInterface.bulkDelete("Strays", null, {});
    }
};
