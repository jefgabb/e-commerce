import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        const {token} = req.headers;

        if(!token){
            return res.json({success: false, message: "Not authorized"});
        }

        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: "Not authorized"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export default adminAuth;