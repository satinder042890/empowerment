const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, required: true}
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
