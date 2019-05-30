module.exports = function(req,res,next) {
    //middleware function for if Buyer is an admin or not
    console.log(req.user);
    if(!req.user.isAdmin) return res.status(403).send('Access Denied');

    next();
}