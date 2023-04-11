const jwt = require("jsonwebtoken")
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../Models/User')


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
 }

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.idUser).select('email idUser login')
                if(user) {
                    done(null, user)
                }
                else {
                    done(null, false)
                }
            } catch (error) {
                console.log(error)
            }

        })
    )
}
