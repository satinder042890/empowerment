const db=require("../models");
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'e92c54b9',
  apiSecret: 'rGHO23uIQXryfScb'
});
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

      update: function(req,res){
        db.User
        .findById(req.params.id)
        .then(dbModel => {
            console.log(dbModel)
            return db.Contact.findOneAndUpdate({ _id: dbModel.contact }, { number:req.body.number , message: req.body.message }, { new: true });
          })
        .then(data =>{
          console.log(data)
          res.json(data)
        })
        
      //   res.json(dbModel)
 
        .catch(err => res.status(422).json(err));
      },
      sendData: function(req,res){
        console.log(req.params.number);
        console.log(req.params.message);
        nexmo.message.sendSms(
          '12532383444', req.params.number, req.params.message, {type: 'unicode'},
          (err, responseData) => {
            if(err){
              console.log(err)
            }
            if (responseData) {
              console.log(responseData)
            }
          }
        );
      }
};