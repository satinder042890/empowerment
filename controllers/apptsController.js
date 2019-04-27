const db=require("../models");

module.exports = {
    // create:function(req,res){
    //     console.log(req);
    //     // console.log(_userId);
    //     db.Appointment
    //     // .findById({ _userId: req.params.id })
    //     .create(req.body)
    //     .then(data =>res.json(data))
    //     .catch(err =>res.status(422).json(err))
    // },

    create: function(req, res) {
        console.log(req.params.id);
        db.Appointment
        .create(req.body)
        .then(function(userdata) {
            return db.User.findOneAndUpdate({ _id: req.params.id }, { "$push": { appointment: userdata._id } }, { new: true });
        })
        .then(data =>res.json(data))
        .catch(err =>res.status(422).json(err))

        
    },
    findAll: function(req, res) {
        db.User
          .find({_id: req.params.id})
          .sort({ date: -1 })
          .then(dbModel => {
            console.log(dbModel)
            db.Appointment
              .findById(dbModel.appointment)
              .then(data =>res.json(data)
              )
          })
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.User
          .findOne({_id:req.params.id}).populate("appointment")
          .then(dbModel => {
              console.log(dbModel.appointment)
              res.json(dbModel);
              
            })
          .catch(err => res.json(err));
    },
    delete: function(req, res) {
        db.Appointment
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};