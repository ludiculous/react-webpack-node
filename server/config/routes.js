/**
 * Routes for express app
 */
var topics = require('../controllers/topics');
var express = require('express');
var profiles = require('../controllers/profiles')
var users = require('../controllers/users');
var mongoose = require('mongoose');
var _ = require('lodash');
var Topic = mongoose.model('Topic');
var App = require('../../public/assets/app.server');

module.exports = function(app, passport) {
  // user routes
  app.post('/login', users.postLogin);
  app.post('/signup', users.postSignUp);
  app.get('/logout', users.getLogout);

  // google auth
  // Redirect the user to Google for authentication. When complete, Google
  // will redirect the user back to the application at
  // /auth/google/return
  // Authentication with google requires an additional scope param, for more info go 
  // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
  app.get('/auth/google', passport.authenticate('google', { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ] }));

  // Google will redirect the user to this URL after authentication. Finish the
  // process by verifying the assertion. If valid, the user will be logged in.
  // Otherwise, the authentication has failed.
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

  // topic routes
  app.get('/topic', topics.all);

  app.post('/topic', function(req, res) {
    topics.add(req, res);
  });

  app.put('/topic', function(req, res) {
    topics.update(req, res);
  });

  app.delete('/topic', function(req, res) {
    topics.remove(req, res);
  });

  app.get('/api/profile', profiles.all);

  app.post('/api/profile', function(req,res){
    profiles.add(req,res);
  })

  app.put('/api/profile', function(req,res){
    profiles.update(req, res);
  })

  app.delete('/api/profile', function(req,res){
    profiles.remove(req, res);
  })

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
    App(req, res);
  });

};;
