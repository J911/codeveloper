const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const Auth = require('../auth');
require('dotenv').config();
 
passport.use(new GitHubStrategy({
    clientID: 'feabea44a7abf82a9dd7',
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    Auth.findOrCreate({ user_id: profile.id, user_name: profile.username, user_avatar: profile.photos[0].value }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function (user, done) {
    done(null, user)
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
module.exports = passport;