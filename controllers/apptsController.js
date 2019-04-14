const db=require("../models");

module.exports = {
    create:function(req,res){
        db.Appointment.create(req.body)
        .then(data =>res.json(data))
        .catch(err =>res.status(422).json(err))
    },
    findAll: function(req, res) {
        db.Appointment
          .find(req.query)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Appointment
          .findById(req.params.id)
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Appointment
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }

}