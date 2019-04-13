const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  apptType: { type: String, required: true},
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
