const db=require("../models");
module.exports={
    create:function(req,res){
        db.User.create(req.body)
        .then(data =>res.json(data))
        .catch(err =>res.status(422).json(err))
    }
};