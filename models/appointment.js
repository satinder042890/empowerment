const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  _userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  apptType: { type: String, required: true},
  
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
