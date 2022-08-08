const User = require("../Model/User")
const bcrypt = require("bcryptjs")

const RegisterAuth = async(req, res) => {
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        return res.status(400).json({msg: "Please enter all fields"})
    }
    const user = await User.findOne({email: req.body.email}).exec();
    if(user){
        return res.status(400).json({msg: "User already exists"})
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hash
        })
        const savedUser = await newUser.save();
        res.json(savedUser)
    }
    catch(err){
        res.status(400).json({msg: err.message})
    }

}

module.exports = RegisterAuth