var mongoose = require('mongoose');
var _ = require('lodash');
var Profile = mongoose.model('Profile');

exports.all = function(req, res) {
  Profile.find({}).exec(function(err, profiles) {
    if(!err) {
      res.json(profiles);
    }else {
      console.log('Error in first query');
    }
  });
};


exports.add = function(req, res) {
  Profile.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send('OK');
  });
};


exports.update = function(req, res) {
  var query = { id: req.body.id };
 
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _.omit(req.body, omitKeys);

  if(isFull) {
    Profile.findOneAndUpdate(query, data, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  } else {
    Profile.findOneAndUpdate(query, {text: req.body.text, state: req.body.stat }, function(err, data) {
      if(err) {
        console.log('Error on save!');
        // Not sure if server status is the correct status to return
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  }
  
};

exports.remove = function(req, res) {
  var query = { id: req.body.id };
  Profile.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};