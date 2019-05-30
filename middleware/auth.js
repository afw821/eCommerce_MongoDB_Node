const jwt = require('jsonwebtoken');
const config = require('config');
//THIS FUNCTION IS USED TO PROTECT ROUTES WITH JWT
function auth(req, res, next) {
    //get token from request header
    const token = req.header('x-auth-token');
    //if token doesn't exist send access denied back to the client
    if (!token) return res.status(401).send('Access Denied. No Token provided');
    try {
        //if token does exist verify valid token
        //2nd argument is Private Key for decoding the token
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        //user from Buyer Model
        req.user = decoded;
        //pass control to next middleware function
        next();
    } catch (error) {
        res.status(400).send('invalid token');
    }

}

module.exports = auth