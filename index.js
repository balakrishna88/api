import express from "express";
import mongoose from "mongoose";
import { blog } from "./controllers/blog_controller";
import blogRoute from "./routes/blog_route";
import userRoute from "./routes/user_route";

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());


app.get("/api", (req,res)=> {
	res.status(200).json({message: "iam running"});
});

app.use("/blog", blogRoute);
app.use("/user", userRoute);

mongoose.connect("mongodb+srv://infinity:11221122@cluster0.ckrprdz.mongodb.net/blogDB?retryWrites=true&w=majority")
.then(()=> app.listen(port))
.then(()=>console.log(`connected ${port}`));

