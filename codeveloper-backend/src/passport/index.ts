import * as passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'
import * as env from '../environment/environment-handler'

passport.use(new GitHubStrategy(
  {
    // @ts-ignore
    clientID: env.passport.clientID, 
    // @ts-ignore
    clientSecret: env.passport.clientSecret,
    // @ts-ignore
    callbackURL: env.passport.callbackURL
  }, (accessToken, refreshToken, profile, done) => done(null, profile)
));

passport.serializeUser(function (user, done) {
    done(null, user)
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

export default passport;