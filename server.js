import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = (process.env.PORT) || 5000;

mongoose.connect(`mongodb+srv://${process.env.ATLASUSER}:${process.env.ATLASPASS}@cluster0.ww9p8ss.mongodb.net/hiring`).then((data) => {
  console.log("DB connected Successfuly")
}).catch((err) => {
  console.log("DB ERROR : ", err);
})

const USERPASS = process.env.USER;
const HASHEDPASS = await bcrypt.hash(process.env.PASS, 10);

app.use(cors());
app.use(express.json())

const HiringSchema = new mongoose.Schema({
  role: String,
  name: String,
  email: String,
  number: String,
  organization: String
})

const Tech_Set_Schema = new mongoose.Schema({
  name: String,
  library: String,
  type: String,
  url: String,
  color: String
})

const Proj_Set_Schema = new mongoose.Schema({
  ProjectName: String,
  TechUsed: String,
  Type: String,
  Link: String,
  Github: String
})

const Hiring = mongoose.model("Hire", HiringSchema);
const Tech_Set = mongoose.model("Tech_Set", Tech_Set_Schema);
const Proj_Set = mongoose.model("Proj_Set", Proj_Set_Schema);

app.post('/verify-login', async (req, res)=>{
    const {username, password} = req.body;

    if(username == USERPASS && await bcrypt.compare(password, HASHEDPASS)){
        return res.status(200).json({success: true})
    }
    res.status(401).json({success: false, message: "Unauthorized"})
})

app.post('/send-Hform-data', async (req, res)=>{
    const {role,name, email, number, organization} = req.body;
    const newHire = new Hiring({role, name, email, number, organization})
    await newHire.save();
    res.status(200).json({success: true})
})

app.get('/Notifications-Hiring', async(req, res)=>{
  try{
    const Hiring_data = await Hiring.find();
    res.json(Hiring_data);
  }
  catch(err){
    res.status(500).json({error: err.message});
  }
})

app.post('/Setting-Tech-Data', async(req, res)=>{
  const {name, library, type, url, color} = req.body;
  const newTechSet = new Tech_Set({name, library, type, url, color})
  await newTechSet.save();
  res.status(200).json({success: true})
})

app.get("/Tech_Setting", async(req, res)=>{
  try{
    const Tech_Set_Data = await Tech_Set.find();
    res.json(Tech_Set_Data);
  }
  catch(err){
    res.status(500).json({error: err.message})
  }
})

app.post("/Sending_Proj_data", async(req, res)=>{
  try{
    const Proj_Set_Data = await Proj_Set.find();
    res.json(Proj_Set_Data)
  }
  catch(err){
    res.status(500).json({error: err.message})
  }
})

app.post("/Send_Proj_data", async(req, res)=>{
  const {ProjectName, TechUsed, Type, Link, Github} = req.body;
  const newProject = new Proj_Set({ProjectName, TechUsed, Type, Link, Github});
  await newProject.save();
  res.status(200).json({message: "Data Recieved"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})