const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const user = await User.findOne({
          email: profile.emails[0].value,
        });

        if (user) {
          // return done(null, user);
          return done(null, profile);
        }

        const name = profile.displayName.split(" ");

        const newUser = new User({
          firstname: name[0],
          lastname: name[1],
          provider: profile.provider,
          googleId: profile.id,
          email: profile.emails[0].value,
          isAdmin: false,
        });

        const savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
