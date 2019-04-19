const db=require("../models");
module.exports={
    
    findUser :function(req,res){
        // console.log(JSON.parse(JSON.stringify(req.user)));
        console.log("hiiiiiiiiiiiiii");
       console.log(req.user)
       if(!res){
            res.redirect("/signup")
       }
        res.json(JSON.parse(JSON.stringify(req.user)) );
        // res.send(req.user);
        // res.json("/tracker");
    },
    create:function(req,res){
        db.User.create(req.body)
        .then(data =>res.json(data))
        .catch(err =>res.status(422).json(err))
    }
};