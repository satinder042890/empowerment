const db=require("../models");
const passport =require("../config/passport");
module.exports={
    create:function(req,res){
        db.User.create(req.body)
        .then(data =>res.json(data))
        .catch(err =>res.status(422).json(err))
    },
    findUser :function(req,res){
        passport.authenticate("local",req.body);
        res.json("/tracker");
    }
};