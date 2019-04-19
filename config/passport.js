//DEPENDENCEIS

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use(new LocalStrategy(
  // Our user will sign in using USERNAME, rather than a "EMAIL"
  {
    usernameField: "username"
  },
  function(username, password, done) {
    console.log("username = "+username);
    console.log("password = "+password);
    db.User.findOne( {
        username: username
      }, function(err,dbUser){
        
        if(err){
          console.log(err);
        }
        if (!dbUser) {
         
          return done(null, false, {
            message: "Incorrect Username."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
         
          return done(null, false, {
            message: "Incorrect password."
          });
        }
      
        return done(null, dbUser);
     
      })
    
      
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
