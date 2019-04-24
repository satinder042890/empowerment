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
        db.Appointment.create(req.body).then(function(dbAppointment) {
            res.json(dbAppointment);
        });
    },
    findAll: function(req, res) {
        db.Appointment
          .find(req.query)
          .sort({ date: -1 })
          .then(dbAppointment => res.json(dbAppointment))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Appointment
          .findById({_userId: req.params.id})
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.Appointment
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};