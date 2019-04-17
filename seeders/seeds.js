"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.bulkInsert("Strays", [
            {

                "Found Location": "7224 BLACK PANDA TRAIL78617\n(30.15489, -97.643876)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Pit Bull Mix",
                "Color": "White/Brown",
                "Sex": "Spayed Female",
                "Age": "10 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.A541497"
            },
            {

                "Found Location": "1106 REINLI STREET\nAUSTIN 78723\n(30.316452, -97.702912)",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "Pointer/Pit Bull",
                "Color": "Blue/White",
                "Sex": "Spayed Female",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.700551"
            },
            {

                "Found Location": "SOUTH HERSEY DIVE AUSTIN 78744\n(30.186349, -97.738673)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Pomeranian Mix",
                "Color": "Buff/White",
                "Sex": "Spayed Female",
                "Age": "6 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.710225"
            },
            {

                "Found Location": "THAXTON ROAD AUSTIN 78747\n(30.133523, -97.757228)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Golden Retriever Mix",
                "Color": "Gold",
                "Sex": "Spayed Female",
                "Age": "10 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.722024"
            },
            {

                "Found Location": "WOODHUE DRIVE AUSTIN 78745\n(30.206782, -97.798214)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Blue/White",
                "Sex": "Neutered Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.744019"
            },
            {

                "Found Location": "BURNET ROAD\nAUSTIN 78759",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Cairn Terrier Mix",
                "Color": "Tan/White",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.744193"
            },
            {

                "Found Location": "1301 CROSSING PLACE\nAUSTIN 78741\n(30.236641, -97.713931)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Blue",
                "Sex": "Neutered Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.769343"
            },
            {

                "Found Location": "SOUTH PLEASANT VALLEY ROAD\nAUSTIN 78744",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "Plott Hound/Labrador Retriever",
                "Color": "Brown Brindle/White",
                "Sex": "Neutered Male",
                "Age": "11 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.775940"
            },
            {

                "Found Location": "290 AUSTIN78752",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown/Black",
                "Sex": "Neutered Male",
                "Age": "10 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.782676"
            },
            {

                "Found Location": "2700 DENTON LANE\nAUSTIN 78726",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Cairn Terrier Mix",
                "Color": "White",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.783983"
            },
            {

                "Found Location": "2700 DENTON LANE\nAUSTIN 78726",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown/Black",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.783984"
            },
            {

                "Found Location": "FARO AUSTIN 78741\n(30.227985, -97.716971)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Black/Tan Hound Mix",
                "Color": "Black/Tan",
                "Sex": "Intact Female",
                "Age": "3 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.788145"
            },
            {

                "Found Location": "1213 WEST SLAUGHTER LANE\nAUSTIN 78748\n(30.173797, -97.814082)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Pit Bull Mix",
                "Color": "Brown Brindle",
                "Sex": "Neutered Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.788990"
            },
            {

                "Found Location": "12507 SCISSORTAIL DRIVE\nAUSTIN 78652\n(30.133512, -97.830408)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Spayed Female",
                "Age": "10 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.790108"
            },
            {

                "Found Location": "45 COMAL STREET\nAUSTIN 78702\n(30.252204, -97.731588)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Border Terrier Mix",
                "Color": "Black/Gray",
                "Sex": "Spayed Female",
                "Age": "10 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.791361"
            },
            {

                "Found Location": "AUSTIN 78757\n(30.349869, -97.732706)",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Unknown",
                "Age": "2 days",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792310"
            },
            {

                "Found Location": "AUSTIN 78757\n(30.349869, -97.732706)",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Unknown",
                "Age": "2 days",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792311"
            },
            {

                "Found Location": "812 AND\nELROY 78617",
                "At AAC": 1,
                "Intake Date": "4/9/2019",
                "Type": "Dog",
                "Looks Like": "Cocker Spaniel Mix",
                "Color": "Black/Brown",
                "Sex": "Intact Male",
                "Age": "7 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792312"
            },
            {

                "Found Location": "812 AND\nELROY 78617",
                "At AAC": 1,
                "Intake Date": "4/9/2019",
                "Type": "Dog",
                "Looks Like": "Cairn Terrier Mix",
                "Color": "Tan",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792313"
            },
            {

                "Found Location": "812 AND\nELROY 78617",
                "At AAC": 1,
                "Intake Date": "4/9/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair/Cairn Terrier",
                "Color": "Tan/White",
                "Sex": "Intact Female",
                "Age": "6 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792314"
            },
            {

                "Found Location": "812 AND\nELROY 78617",
                "At AAC": 1,
                "Intake Date": "4/9/2019",
                "Type": "Dog",
                "Looks Like": "Cairn Terrier",
                "Color": "Brown",
                "Sex": "Intact Female",
                "Age": "6 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792315"
            },
            {

                "Found Location": "14315 OLD MANOR MANOR78653",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Blue",
                "Sex": "Intact Female",
                "Age": "1 week",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792331"
            },
            {

                "Found Location": "14315 OLD MANOR MANOR78653",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "1 week",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792332"
            },
            {

                "Found Location": "14315 OLD MANOR MANOR78653",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Intact Male",
                "Age": "1 week",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792333"
            },
            {

                "Found Location": "8501 SHENADOAH DRIVE\nAUSTIN 78753\n(30.347173, -97.691154)",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Dog",
                "Looks Like": "Carolina Dog Mix",
                "Color": "Tan/Black",
                "Sex": "Intact Female",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792334"
            },
            {

                "Found Location": "7412 TECOMA CIRCLE\nAUSTIN 78735",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Unknown",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792349"
            },
            {

                "Found Location": "TURTLE CREEK AUSTIN 78745\n(30.206782, -97.798214)",
                "At AAC": 0,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Blue Tabby",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792350"
            },
            {

                "Found Location": "TISDALE AUSTIN 78757\n(30.349869, -97.732706)",
                "At AAC": 1,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Female",
                "Age": "2 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792378"
            },
            {

                "Found Location": "TISDALE AUSTIN 78757\n(30.349869, -97.732706)",
                "At AAC": 1,
                "Intake Date": "4/9/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "2 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792379"
            },
            {

                "Found Location": "AUSTIN 78725\n(30.242394, -97.615386)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792395"
            },
            {

                "Found Location": "8501 LINDON ROAD78617\n(30.131655, -97.591404)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black/Tan",
                "Sex": "Intact Male",
                "Age": "11 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792397"
            },
            {

                "Found Location": "WILLIAMSON ROAD78610",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "White",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792424"
            },
            {

                "Found Location": "2104 E ANDERSON LANE\nAUSTIN 78752\n(30.329378, -97.678526)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "West Highland/Yorkshire Terrier",
                "Color": "Cream",
                "Sex": "Neutered Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792428"
            },
            {

                "Found Location": "2104 E ANDERSON LANE\nAUSTIN 78752\n(30.329378, -97.678526)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Norwich Terrier",
                "Color": "Tan/White",
                "Sex": "Neutered Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792430"
            },
            {

                "Found Location": "ROSEWOOD\nAUSTIN 78702",
                "At AAC": 0,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "6 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792432"
            },
            {

                "Found Location": "ROSEWOOD\nAUSTIN 78702",
                "At AAC": 0,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "6 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792433"
            },
            {

                "Found Location": "12036 PARSONS ROAD78653\n(30.325551, -97.509225)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Pit Bull/Jack Russell Terrier",
                "Color": "Brown Brindle/Black",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792444"
            },
            {

                "Found Location": "12036 PARSONS ROAD78653\n(30.325551, -97.509225)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Jack Russell Terrier/Pit Bull",
                "Color": "Brown Brindle/Black",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792445"
            },
            {

                "Found Location": "9302 S 1ST ST\nAUSTIN 78748\n(30.169864, -97.801524)",
                "At AAC": 0,
                "Intake Date": "4/10/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792447"
            },
            {

                "Found Location": "9302 S 1ST ST\nAUSTIN 78748\n(30.169864, -97.801524)",
                "At AAC": 0,
                "Intake Date": "4/10/2019",
                "Type": "Cat",
                "Looks Like": "Snowshoe Mix",
                "Color": "Seal Point",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792448"
            },
            {

                "Found Location": "4508 BRANDT RD78744\n(30.159555, -97.77136)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Rottweiler Mix",
                "Color": "Black/Brown",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792449"
            },
            {

                "Found Location": "1700 WEST PARMER\nAUSTIN 78727\n(30.412512, -97.688909)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Neutered Male",
                "Age": "8 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792453"
            },
            {

                "Found Location": "12120 SHROPSHIRE BOULEVARD\nAUSTIN 78753\n(30.386582, -97.658209)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Tan/Black",
                "Sex": "Spayed Female",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792458"
            },
            {

                "Found Location": "2612 EKTOM DRIVE\nAUSTIN 78745\n(30.223369, -97.803765)",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792460"
            },
            {

                "Found Location": "1626 AND\nMANCHACA 78652",
                "At AAC": 1,
                "Intake Date": "4/10/2019",
                "Type": "Dog",
                "Looks Like": "Australian Cattle Dog Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792461"
            },
            {

                "Found Location": "AUSTIN 78754\n(30.356927, -97.643722)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792467"
            },
            {

                "Found Location": "AUSTIN 78754\n(30.356927, -97.643722)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792468"
            },
            {

                "Found Location": "AUSTIN 78754\n(30.356927, -97.643722)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792469"
            },
            {

                "Found Location": "AUSTIN 78754\n(30.356927, -97.643722)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792470"
            },
            {

                "Found Location": "AUSTIN 78754\n(30.356927, -97.643722)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792471"
            },
            {

                "Found Location": "AUSTIN 78754\n(30.356927, -97.643722)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792472"
            },
            {

                "Found Location": "AUSTIN 78758\n(30.384311, -97.706726)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792473"
            },
            {

                "Found Location": "AUSTIN 78758\n(30.384311, -97.706726)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792474"
            },
            {

                "Found Location": "AUSTIN 78758\n(30.384311, -97.706726)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792475"
            },
            {

                "Found Location": "AUSTIN 78758\n(30.384311, -97.706726)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792476"
            },
            {

                "Found Location": "AUSTIN 78758\n(30.384311, -97.706726)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Unknown",
                "Age": "0 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792477"
            },
            {

                "Found Location": "7418 VINTAGE HILLS DRIVE\nAUSTIN 78723\n(30.319496, -97.666497)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby",
                "Sex": "Intact Male",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792480"
            },
            {

                "Found Location": "3601 E 12TH\nAUSTIN 78721\n(30.277852, -97.694102)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Cream",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792481"
            },
            {

                "Found Location": "7418 VINTAGE HILLS DRIVE\nAUSTIN 78723\n(30.319496, -97.666497)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Calico",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792482"
            },
            {

                "Found Location": "7418 VINTAGE HILLS DRIVE\nAUSTIN 78723\n(30.319496, -97.666497)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Tortie",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792483"
            },
            {

                "Found Location": "3601 E 12TH\nAUSTIN 78721\n(30.277852, -97.694102)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Cream",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792484"
            },
            {

                "Found Location": "2210 ONION CREEK\nAUSTIN 78744",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black/Brown",
                "Sex": "Spayed Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792486"
            },
            {

                "Found Location": "ANDERSON\nAUSTIN 78757",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Male",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792487"
            },
            {

                "Found Location": "TORO CANYON ROAD AUSTIN 78746\n(30.293201, -97.80785)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Yorkshire Terrier/Miniature Schnauzer",
                "Color": "Red/Black",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792493"
            },
            {

                "Found Location": "7014 ELROY ROAD78617\n(30.158176, -97.642922)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792494"
            },
            {

                "Found Location": "5300 MC\nCANDLESS AUSTIN 78756",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Collie Rough Mix",
                "Color": "Tricolor",
                "Sex": "Unknown",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792498"
            },
            {

                "Found Location": "2002 NORTHRIDGE DRIVE\nAUSTIN 78723\n(30.310158, -97.690281)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Longhair Mix",
                "Color": "Tan/White",
                "Sex": "Intact Female",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792499"
            },
            {

                "Found Location": "412 EAST WILLIAM\nCANNON AUSTIN 78745",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792500"
            },
            {

                "Found Location": "1156 WEST CESAR\nCHAVEZ AUSTIN 78703",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby",
                "Sex": "Intact Male",
                "Age": "7 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792501"
            },
            {

                "Found Location": "1156 WEST CESAR\nCHAVEZ AUSTIN 78703",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby",
                "Sex": "Intact Male",
                "Age": "7 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792502"
            },
            {

                "Found Location": "1156 WEST CESAR\nCHAVEZ AUSTIN 78703",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby",
                "Sex": "Intact Male",
                "Age": "7 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792503"
            },
            {

                "Found Location": "1156 WEST CESAR\nCHAVEZ AUSTIN 78703",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Female",
                "Age": "7 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792504"
            },
            {

                "Found Location": "1156 WEST CESAR\nCHAVEZ AUSTIN 78703",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Tan/White",
                "Sex": "Intact Female",
                "Age": "7 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792505"
            },
            {

                "Found Location": "5555 EL MOLINO CIR\nAUSTIN 78617\n(30.172639, -97.627882)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Medium Hair Mix",
                "Color": "Orange/White",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792511"
            },
            {

                "Found Location": "WALNUT PARK AUSTIN 78753\n(30.378511, -97.675352)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever/Pit Bull",
                "Color": "Black",
                "Sex": "Intact Female",
                "Age": "6 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792513"
            },
            {

                "Found Location": "WALNUT PARK AUSTIN 78753\n(30.378511, -97.675352)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever/Pit Bull",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "6 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792514"
            },
            {

                "Found Location": "WALNUT PARK AUSTIN 78753\n(30.378511, -97.675352)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever/Pit Bull",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "6 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792515"
            },
            {

                "Found Location": "1430 FRONTIER VALLEY\nAUSTIN 78741\n(30.226736, -97.693319)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Intact Female",
                "Age": "2 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792524"
            },
            {

                "Found Location": "11500 EL SALIDO PARKWAY\nAUSTIN 78750\n(30.455486, -97.819308)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Pit Bull Mix",
                "Color": "Brown/White",
                "Sex": "Unknown",
                "Age": "2 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792528"
            },
            {

                "Found Location": "1600 EAST 13TH STREET\nAUSTIN 78702\n(30.274312, -97.723003)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Neutered Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792531"
            },
            {

                "Found Location": "1601 E ANDERSON LN\nAUSTIN 78752\n(30.331232, -97.684107)",
                "At AAC": 1,
                "Intake Date": "4/11/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby/White",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792532"
            },
            {

                "Found Location": "7500 S PLEASANT VALLEY RD\nAUSTIN 78744\n(30.169767, -97.754017)",
                "At AAC": 0,
                "Intake Date": "4/11/2019",
                "Type": "Dog",
                "Looks Like": "Yorkshire Terrier Mix",
                "Color": "Brown/Silver",
                "Sex": "Intact Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792533"
            },
            {

                "Found Location": "AUSTIN 78702\n(30.264271, -97.71608)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Medium Hair Mix",
                "Color": "Blue/White",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792544"
            },
            {

                "Found Location": "8005 SEELING DRIVE\nAUSTIN 78744\n(30.203418, -97.688709)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black/Tan",
                "Sex": "Intact Male",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792549"
            },
            {

                "Found Location": "8005 SEELING DRIVE\nAUSTIN 78744\n(30.203418, -97.688709)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black/Tan",
                "Sex": "Intact Male",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792550"
            },
            {

                "Found Location": "8005 SEELING DRIVE\nAUSTIN 78744\n(30.203418, -97.688709)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Tan/Black",
                "Sex": "Intact Male",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792551"
            },
            {

                "Found Location": "1303 BARONETS TRAIL\nAUSTIN 78753\n(30.384213, -97.659333)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Torbie/White",
                "Sex": "Intact Female",
                "Age": "9 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792552"
            },
            {

                "Found Location": "12349 METRIC BOULEVARD\nAUSTIN 78758\n(30.410374, -97.695828)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792563"
            },
            {

                "Found Location": "12349 METRIC BOULEVARD\nAUSTIN 78758\n(30.410374, -97.695828)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792564"
            },
            {

                "Found Location": "9708 MANCHACA ROAD\nAUSTIN 78748\n(30.175293, -97.823033)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Male",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792579"
            },
            {

                "Found Location": "9708 MANCHACA ROAD\nAUSTIN 78748\n(30.175293, -97.823033)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Male",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792580"
            },
            {

                "Found Location": "9708 MANCHACA ROAD\nAUSTIN 78748\n(30.175293, -97.823033)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Cream Tabby/White",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792581"
            },
            {

                "Found Location": "6501 WEST WILLIAM CANNON DRIVE\nAUSTIN 78735\n(30.235531, -97.865328)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Medium Hair Mix",
                "Color": "Torbie",
                "Sex": "Intact Female",
                "Age": "4 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792583"
            },
            {

                "Found Location": "SOUTH SLAUGHTER LANE\nAUSTIN 78748",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Papillon/Dachshund",
                "Color": "Cream",
                "Sex": "Intact Male",
                "Age": "9 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792589"
            },
            {

                "Found Location": "2025 EAST 7TH STREET\nAUSTIN 78702\n(30.261891, -97.719376)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Chocolate/Tan",
                "Sex": "Intact Female",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792590"
            },
            {

                "Found Location": "2025 EAST 7TH STREET\nAUSTIN 78702\n(30.261891, -97.719376)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Tan",
                "Sex": "Intact Female",
                "Age": "6 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792591"
            },
            {

                "Found Location": "30 AND HIGHWAY78617",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792593"
            },
            {

                "Found Location": "AUSTIN 78726\n(30.431233, -97.838431)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792603"
            },
            {

                "Found Location": "AUSTIN 78726\n(30.431233, -97.838431)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792605"
            },
            {

                "Found Location": "AUSTIN 78726\n(30.431233, -97.838431)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792606"
            },
            {

                "Found Location": "AUSTIN 78726\n(30.431233, -97.838431)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby",
                "Sex": "Intact Male",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792607"
            },
            {

                "Found Location": "5315 WESTMINSTER DRIVE\nAUSTIN 78723\n(30.301766, -97.686587)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Unknown",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792612"
            },
            {

                "Found Location": "280 DRY CREEK RD MANOR78753\n(30.169486, -97.990934)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "White/Gray",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792613"
            },
            {

                "Found Location": "2300 MISSION HILL DRIVE\nAUSTIN 78741\n(30.216838, -97.737391)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792619"
            },
            {

                "Found Location": "8101 LULING LANE\nAUSTIN 78729\n(30.456757, -97.759692)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Siberian Husky",
                "Color": "Gray/Black",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792620"
            },
            {

                "Found Location": "13200 MARIE LANE MANOR78653\n(30.352148, -97.532724)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Australian Cattle Dog Mix",
                "Color": "Black/Tricolor",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792621"
            },
            {

                "Found Location": "6007 KIDNEYWOOD TRAIL\nAUSTIN 78735\n(30.250138, -97.881822)",
                "At AAC": 1,
                "Intake Date": "4/12/2019",
                "Type": "Dog",
                "Looks Like": "Rhod Ridgeback Mix",
                "Color": "Brown/White",
                "Sex": "Intact Male",
                "Age": "2 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792622"
            },
            {

                "Found Location": "3500 GREYSTONE DRIVE\nAUSTIN 78731\n(30.358068, -97.749568)",
                "At AAC": 0,
                "Intake Date": "4/12/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792623"
            },
            {

                "Found Location": "NACHEZ TRAIL 78734\n(30.377001, -97.952751)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Australian Shepherd Mix",
                "Color": "Blue Merle/White",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792634"
            },
            {

                "Found Location": "BYERS LANE\nAUSTIN 78753",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Pug/Beagle",
                "Color": "Brown Brindle/White",
                "Sex": "Intact Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792638"
            },
            {

                "Found Location": "6725 CIRCLE S ROAD\nAUSTIN 78745\n(30.190891, -97.778041)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Cream/White",
                "Sex": "Intact Female",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792639"
            },
            {

                "Found Location": "8502 MAINE DRIVE\nAUSTIN 78758\n(30.357116, -97.711379)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Pit Bull Mix",
                "Color": "Blue/White",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792640"
            },
            {

                "Found Location": "183 AUSTIN78759",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Anatolian Shepherd/German Shepherd",
                "Color": "Black/Brown",
                "Sex": "Intact Female",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792641"
            },
            {

                "Found Location": "183 AUSTIN78728",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Anatolian Shepherd/German Shepherd",
                "Color": "Black/Brown",
                "Sex": "Intact Female",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792642"
            },
            {

                "Found Location": "183 AUSTIN78759",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Anatolian Shepherd/German Shepherd",
                "Color": "Brown/Black",
                "Sex": "Intact Male",
                "Age": "8 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792643"
            },
            {

                "Found Location": "ASPEN GLEN DRIVE AUSTIN 78744\n(30.186349, -97.738673)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Miniature Poodle Mix",
                "Color": "Black",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792645"
            },
            {

                "Found Location": "9100 EVELYN ROAD78610\n(30.06663, -97.681258)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black/White",
                "Sex": "Unknown",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792646"
            },
            {

                "Found Location": "AUSTIN 78741\n(30.227985, -97.716971)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Cream Tabby",
                "Sex": "Intact Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792649"
            },
            {

                "Found Location": "6307 BLUFF SPRINGS ROAD\nAUSTIN 78744\n(30.191444, -97.765715)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Spayed Female",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792650"
            },
            {

                "Found Location": "12138 NORTH LAMAR\nAUSTIN 78753\n(30.398419, -97.679479)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Siberian Husky",
                "Color": "Red/Tan",
                "Sex": "Unknown",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792651"
            },
            {

                "Found Location": "2131 WILLIAM BARTON DRIVE\nAUSTIN 78746\n(30.265038, -97.770184)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Red",
                "Sex": "Intact Female",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792658"
            },
            {

                "Found Location": "11551 MAHA LOOP ROAD\nAUSTIN 78734\n(30.096687, -97.684097)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Staffordshire Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792659"
            },
            {

                "Found Location": "11551 MAHA LOOP ROAD\nAUSTIN 78734\n(30.096687, -97.684097)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Staffordshire Mix",
                "Color": "Blue/White",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792660"
            },
            {

                "Found Location": "SAN CHISOLM AUSTIN 78660\n(30.449905, -97.613157)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Siberian Husky",
                "Color": "Black/Gray",
                "Sex": "Intact Female",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792662"
            },
            {

                "Found Location": "SAN CHISOLM AUSTIN 78660\n(30.449905, -97.613157)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Siberian Husky",
                "Color": "Red/Buff",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792663"
            },
            {

                "Found Location": "1912 E 7TH\nAUSTIN 78702\n(30.262272, -97.721066)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Pointer Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792666"
            },
            {

                "Found Location": "5801 TERI ROAD\nAUSTIN 78744\n(30.19201, -97.731754)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Rat Terrier/Chihuahua Shorthair",
                "Color": "Tan/White",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792671"
            },
            {

                "Found Location": "8906 WALL STREET\nAUSTIN 78754\n(30.341682, -97.670596)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Cat",
                "Looks Like": "American Shorthair Mix",
                "Color": "Blue Tabby",
                "Sex": "Neutered Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792676"
            },
            {

                "Found Location": "10613 ETTA LANE\nAUSTIN 78748\n(30.159505, -97.81841)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Female",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792679"
            },
            {

                "Found Location": "10613 ETTA LANE\nAUSTIN 78748\n(30.159505, -97.81841)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Male",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792680"
            },
            {

                "Found Location": "10613 ETTA LANE\nAUSTIN 78748\n(30.159505, -97.81841)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Brown Tabby/White",
                "Sex": "Intact Female",
                "Age": "3 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792681"
            },
            {

                "Found Location": "GREAT FALLS MANOR 78653\n(30.345865, -97.531473)",
                "At AAC": 0,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Cream",
                "Sex": "Spayed Female",
                "Age": "8 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792682"
            },
            {

                "Found Location": "7215 BENNETT\nAUSTIN 78752\n(30.332056, -97.699814)",
                "At AAC": 1,
                "Intake Date": "4/13/2019",
                "Type": "Dog",
                "Looks Like": "Plott Hound Mix",
                "Color": "Brown Brindle/White",
                "Sex": "Intact Male",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792683"
            },
            {

                "Found Location": "6607 WEST WILLIAM\nCANNON AUSTIN 78745",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Siberian Husky",
                "Color": "Gray/Black",
                "Sex": "Intact Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792691"
            },
            {

                "Found Location": "THISTLE HILL WAY\nAUSTIN 78754",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Miniature Poodle Mix",
                "Color": "Apricot",
                "Sex": "Intact Female",
                "Age": "9 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792693"
            },
            {

                "Found Location": "13308 KIRKGLEN ROAD\nAUSTIN 78727\n(30.421307, -97.679729)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Blue",
                "Sex": "Intact Female",
                "Age": "4 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792694"
            },
            {

                "Found Location": "NELSON OAKS DRIVE AUSTIN 78724\n(30.295025, -97.622435)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd/Border Collie",
                "Color": "Brown/Black",
                "Sex": "Intact Female",
                "Age": "9 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792695"
            },
            {

                "Found Location": "CAMERON\nLEAF AUSTIN 78723",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Unknown",
                "Age": "1 week",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792696"
            },
            {

                "Found Location": "NIGHTJAR DRIVE AUSTIN 78748\n(30.166107, -97.825259)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Bull Terrier Miniature Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792697"
            },
            {

                "Found Location": "2018 WEST RUNDBERG LANE\nAUSTIN 78758\n(30.374102, -97.719404)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black Tiger",
                "Sex": "Intact Female",
                "Age": "4 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792699"
            },
            {

                "Found Location": "2018 WEST RUNDBERG LANE\nAUSTIN 78758\n(30.374102, -97.719404)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Male",
                "Age": "4 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792700"
            },
            {

                "Found Location": "3800 SOUTH SECOND STREET\nAUSTIN 78704\n(30.228614, -97.77134)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Red/White",
                "Sex": "Intact Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792701"
            },
            {

                "Found Location": "3604 SAVAGE SPRINGS DRIVE\nAUSTIN 78754\n(30.359403, -97.639093)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Beagle/American Foxhound",
                "Color": "Black/Brown",
                "Sex": "Unknown",
                "Age": "5 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792704"
            },
            {

                "Found Location": "1420 WEST WELLS BRANCH PARKWAY\nPFLUGERVILLE 78660\n(30.440938, -97.663588)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Medium Hair Mix",
                "Color": "Brown Tabby",
                "Sex": "Neutered Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792708"
            },
            {

                "Found Location": "2955 HIGHWAY78617",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Black",
                "Sex": "Intact Female",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792713"
            },
            {

                "Found Location": "CIRCUIT OF AMERICAS 78617\n(30.157123, -97.611102)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "White/Black",
                "Sex": "Intact Male",
                "Age": "10 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792716"
            },
            {

                "Found Location": "1402 MEADOWMEAR\nAUSTIN 78753\n(30.359682, -97.672003)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Red/White",
                "Sex": "Intact Male",
                "Age": "1 year",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792720"
            },
            {

                "Found Location": "11511 NORTH OAKS DRIVE\nAUSTIN 78753\n(30.381327, -97.673154)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792721"
            },
            {

                "Found Location": "12118 WALNUT PARK\nAUSTIN 78753\n(30.39307, -97.676452)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Intact Male",
                "Age": "5 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792722"
            },
            {

                "Found Location": "12118 WALNUT PARK\nAUSTIN 78753\n(30.39307, -97.676452)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Labrador Retriever Mix",
                "Color": "Black/White",
                "Sex": "Intact Female",
                "Age": "5 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792723"
            },
            {

                "Found Location": "7405 CARISSA COVE\nAUSTIN 78759\n(30.415409, -97.776047)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby/White",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792725"
            },
            {

                "Found Location": "7405 CARISSA COVE\nAUSTIN 78759\n(30.415409, -97.776047)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby/White",
                "Sex": "Intact Female",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792726"
            },
            {

                "Found Location": "7405 CARISSA COVE\nAUSTIN 78759\n(30.415409, -97.776047)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby/White",
                "Sex": "Intact Male",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792727"
            },
            {

                "Found Location": "7405 CARISSA COVE\nAUSTIN 78759\n(30.415409, -97.776047)",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Siamese Mix",
                "Color": "Flame Point",
                "Sex": "Intact Male",
                "Age": "4 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792728"
            },
            {

                "Found Location": "FLETCHER LANE AUSTIN 78704\n(30.243217, -97.76448)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Siberian Husky Mix",
                "Color": "Red/White",
                "Sex": "Intact Female",
                "Age": "2 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792730"
            },
            {

                "Found Location": "7316 FIREFLY DRIVE\nAUSTIN 78744\n(30.16988, -97.74963)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Pit Bull Mix",
                "Color": "Brown Brindle/White",
                "Sex": "Intact Male",
                "Age": "9 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792733"
            },
            {

                "Found Location": "2627 BARTON HILLS DRIVE\nAUSTIN 78704\n(30.250468, -97.795274)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Irish Setter/German Shorthair Pointer",
                "Color": "Red",
                "Sex": "Intact Male",
                "Age": "2 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792734"
            },
            {

                "Found Location": "106 BRUSHY CREEK TRAIL\nPFLUGERVILLE 78634\n(30.491995, -97.535981)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Black Mouth Cur Mix",
                "Color": "Brown Brindle/White",
                "Sex": "Intact Male",
                "Age": "5 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792735"
            },
            {

                "Found Location": "9705 WILLERS WAY\nAUSTIN 78748\n(30.178183, -97.83001)",
                "At AAC": 0,
                "Intake Date": "4/14/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Longhair Mix",
                "Color": "White/Silver",
                "Sex": "Intact Female",
                "Age": "9 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792736"
            },
            {

                "Found Location": "2810 W PARMER LANE\nAUSTIN 78727",
                "At AAC": 1,
                "Intake Date": "4/14/2019",
                "Type": "Dog",
                "Looks Like": "Pointer Mix",
                "Color": "White/Brown",
                "Sex": "Intact Female",
                "Age": "7 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792737"
            },
            {

                "Found Location": "14603 TOWN HILL DRIVE\nAUSTIN 78728\n(30.445495, -97.685005)",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "Chihuahua Shorthair Mix",
                "Color": "Tricolor",
                "Sex": "Intact Male",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792745"
            },
            {

                "Found Location": "4505 MAGIN MEADOW DRIVE\nAUSTIN 78744\n(30.178706, -97.75814)",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "Australian Terrier/Standard Schnauzer",
                "Color": "Sable/Tan",
                "Sex": "Intact Female",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792746"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792749"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792750"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Black",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792751"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792752"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792753"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792754"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792755"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792756"
            },
            {

                "Found Location": "BLAKE MANOR ROAD78653",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "German Shepherd Mix",
                "Color": "Brown",
                "Sex": "Unknown",
                "Age": "2 weeks",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792757"
            },
            {

                "Found Location": "1137 GUNTER STREET\nAUSTIN 78721\n(30.270035, -97.69652)",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "Yorkshire Terrier Mix",
                "Color": "Tan/Silver",
                "Sex": "Intact Female",
                "Age": "5 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792758"
            },
            {

                "Found Location": "EAST 2ND\nAUSTIN 78702",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Dog",
                "Looks Like": "Catahoula Mix",
                "Color": "Black Smoke/White",
                "Sex": "Intact Male",
                "Age": "3 months",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792759"
            },
            {

                "Found Location": "12320 SKY HARBOR78617\n(30.169272, -97.62959)",
                "At AAC": 1,
                "Intake Date": "4/15/2019",
                "Type": "Cat",
                "Looks Like": "Domestic Shorthair Mix",
                "Color": "Orange Tabby/White",
                "Sex": "Intact Male",
                "Age": "4 years",
                "Image Link": "http://www.petharbor.com/pet.asp?uaid=ASTN.792762"
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.bulkDelete("Strays", null, {});
    }
};
