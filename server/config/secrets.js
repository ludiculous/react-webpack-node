/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
//'mongodb://ludiculous:123456@ds045785.mongolab.com:45785/reduxtribe',
module.exports = {
  // Find the appropriate database to connect to, default to localhost if not found.
  db:  'mongodb://ludiculous:123456@ds045785.mongolab.com:45785/reduxtribe' ,
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',
  google: {
    clientID: process.env.GOOGLE_CLIENTID || '648489384679-29jj5v10nm6pt9q28mkj582408aeepsh.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'CQVIGNOtthUbvVtRcdbUciiu',
    callbackURL: process.env.GOOGLE_CALLBACK || "/auth/google/callback"
  }
};
