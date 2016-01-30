/**
 * Schema Definitions
 *
 */
var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  id: String,
  text: String,
  stat: { type: Number, min: 0 },
  
});

<<<<<<< HEAD
Profile = mongoose.model('Profile', ProfileSchema);
=======
Topic = mongoose.model('Profile', ProfileSchema);
>>>>>>> f359b7bd4c521e2f645dfdc504e8aac7958a0415

