var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ContactSchema = new Schema({
  // `title` is of type String
  number: Number,
  // `body` is of type String
  message: String
});

// This creates our model from the above schema, using mongoose's model method
var Contact = mongoose.model("Contact", ContactSchema);

// Export the Note model
module.exports = Contact;
