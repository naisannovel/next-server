const admin = require("firebase-admin");
const serviceAccount = require("../next-97-firebase-adminsdk-4wk59-f19a3baf83.json");
const _ = require('lodash');

admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});

module.exports = (req,res,next) =>{
    let token = req.header('Authorization');
    if(!token) return res.status(401).send('access denied, no token provide');
    token = token.split(' ')[1].trim();

    admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
        const userData = _.pick(decodedToken, ["uid", "name", "email", "user_id"]);
        req.user = userData;
        next();
    })
    .catch((error) => {
        res.status(401).send('invalid token');
    });

}