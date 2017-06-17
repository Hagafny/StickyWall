module.exports = (req, res, next) => {
    console.log('indeed its insane');
    let userIdCookie = req.cookies['uid'];
    if (userIdCookie) {
        let expiryDate = 1000 * 60 * 60;  //1 Hour
        res.cookie("uid", userIdCookie, { maxAge: expiryDate });
        next();
    }
    else
        res.status(401).end();
}