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


Profile = mongoose.model('Profile', ProfileSchema);

Topic = mongoose.model('Profile', ProfileSchema);


