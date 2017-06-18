module.exports = (req, res, next) => {
    let userIdCookie = req.cookies['uid'];
    if (userIdCookie) {
        let expiryDate = 1000 * 60 * 60;  //1 Hour
        res.cookie("uid", userIdCookie, { maxAge: expiryDate });
        next();
    }
    else
        res.status(401).end();
}