const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  username:{type:String, required:true},
  email: { type: String, required: true},
  phone: { type: Number, required: true },
  message: {type: String, required: true}
});

const Contactform = mongoose.model('Contactform', contactSchema);

module.exports = Contactform;