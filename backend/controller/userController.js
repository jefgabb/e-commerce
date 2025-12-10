import userModel from "../model/userModel.js";
import validator from "validator";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// User login route
const loginUser = async(req, res) => {
    try {
      const {email, password} = req.body;
      const user = await userModel.findOne({email});

      if(!user){
        return res.json({success: false, message: "User not found"});
      }

      const isMatch = await bycrypt.compare(password, user.password);

      if(isMatch){
        const token = createToken(user._id);
        res.json({success: true, message: "Login successful", token});
      }

      else{
        res.json({success: false, message: "Incorrect password"});
      }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// User regis route
const registerUser = async(req, res) => {
    try {
        const{name, email, password} = req.body;

        const existingUser = await userModel.findOne({email});

        //validasi
        if(existingUser){
            return res.json({success: false, message: "User already exists"});
        }

        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Invalid email format"});
        }
        if(password.length < 8){
            return res.json({success: false, message: "Password must be at least 8 characters long"});
        }

        //hashing password biar kalo misal password yang sama tetap unique
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password,  salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success: true, message: "User successfully registered", token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Admin login route
const adminLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, message: "Admin login successful", token});
        }
        else{
            res.json({success: false, message: "Invalid admin credentials"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {loginUser, registerUser, adminLogin};