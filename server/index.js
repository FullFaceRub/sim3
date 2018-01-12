require('dotenv').config();
const passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , express = require('express')
    , session = require('express-session')

const {SERVER_PORT} = process.env;
const { AUTH_DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL } = process.env;
const {CONNECTION_STRING} = process.env;
const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then((db) => {
    app.set('db',db)
})


passport.use(new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done)=>{

    const db = app.get('db');
    let { displayName, picture, user_id } = profile;

    db.find_user([user_id]).then(function (users){
        if(!users[0]){
            db.create_user([displayName, picture, user_id])
                .then(user => {
                    return done(null, user[0].id)
                })
        } else {
            return done(null, users[0].id)
        }
    })
}))

passport.serializeUser((id,done)=>{
    const db = app.get('db')
    db.find_session_user([id])
    .then(function(user){
        return done(null,user[0])
    })
})

app.get('/auth',passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0',{
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/'
}))

app.get('/auth/me', (req,res)=>{
    if(!req.user){
        res.status(404).send('User not found.');
    } else {
        res.status(200).send(req.user);
    }
})


app.listen(SERVER_PORT, () => {
    console.log(`That's no moon! It's a port ${SERVER_PORT}`)
});