import mongoose from "mongoose";

export const GamificationSchema = new mongoose.Schema({
 Points: Number,
 Medals: ImageBitmap, 
 Avatar: ImageBitmap, 
 Streak: String,
 Level: Number,
 Sublevel: String, 
 Lifes: ImageBitmap, 

})

export interface IGamification extends mongoose.Document{
 Points: Number; 
 Medals: ImageBitmap; 
 Avatar: ImageBitmap; 
 Streak: string; 
 Level: Number; 
 Sublevel: String; 
 Lifes: ImageBitmap; 

}