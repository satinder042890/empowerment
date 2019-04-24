const db=require("../models");
module.exports={
    

    create:function(req,res){
        db.Contact.create(req.body)
        .then(function(userdata) {
           
            return db.User.findOneAndUpdate({ _id: req.params.id }, { contact: userdata._id }, { new: true });
          })
        .then(data =>res.json(data))
        .catch(err =>res.status(422).json(err))
    },

    findById: function(req, res) {
        console.log(req.params.id);
        db.User
          .findById(req.params.id)
          .then(dbModel => {
              console.log(dbModel)
            db.Contact.findById(dbModel.contact).then(
              data =>res.json(data)
          )
        //   res.json(dbModel)
           } )
          .catch(err => res.status(422).json(err));
      },
};