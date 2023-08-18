import user_model from "../models/user_model";
import bcryptjs from "bcryptjs"

export const userSignUp = async (req, res, next) => {
const {name,email,password} = req.body;
const incryptedPass = bcryptjs.hashSync(password);
const user = new user_model({name,email,password : incryptedPass});
try{
    user.save();
}catch(err){
   
    return res.status(500).json({message: `------>${err}`});
}

return res.status(200).json(user);
};
