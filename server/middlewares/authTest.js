// const User = require('../Models/User')

// module.exports = {
//     authorize: async (req, res, next) => {
//         const decodedTokenData = req.headers.authorization
//         const userRecord = await User.findOne({ _id: decodedTokenData._id })
//         if(userRecord) {
//             return res.redirect('./')
//           } else {
//             return next();
          
//          }
//     },
//     unauthorize: async (req, res, next) => {
//         const decodedTokenData = req.token;
//         const userRecord = await User.findOne({ _id: decodedTokenData._id })
//         if(!userRecord) {
//             return res.redirect('./')
//           } else {
//             return next();
          
//          }
//     }
// }