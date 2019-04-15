const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

//configuring passport
//defines to look for users through email, 
passport.use(new LocalStrategy(
    {usernameField: "email"},
    function(email, password, done){
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser){
            if (!dbUser) {
                return done(null, false, {
                    //where are these messages being accessed?
                    message: "We don't have you in our records. Sign up now."
                });
            }
            //here it is calling the prototype function set in user.js when we defined the model
            else if (!dbUser.validPassword(password)){
                return done(null, false, {
                    message: "Password does not match."
                });
            }
            else {
                return done(null, dbUser);
            }
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
  
module.exports = passport;
  