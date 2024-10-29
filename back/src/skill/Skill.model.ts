import mongoose from "mongoose"; 

export const SkillSchema= new mongoose.Schema({
    id: Number, 
    typeofSkill: String, 
    Audio: Buffer, 
    Image: ImageBitmap,
    text: String, 
   
   })
   
   export interface ISkill extends mongoose.Document{
   
    id: Number; 
    typeofSkill: String; 
    Audio: Buffer; 
    Image: ImageBitmap; 
    text: string; 
   }