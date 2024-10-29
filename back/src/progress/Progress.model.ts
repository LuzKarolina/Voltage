import mongoose from "mongoose"; 

export const ProgressSchema = new mongoose.Schema({

    progressId: Number, 
    userId: Number,
    sublevel: String, 
    exercise: String, 
    date: Date,
    time: TimeRanges, 
    points: Number,
    skillId: Number, 

})

export interface IProgress extends mongoose.Document {

    progressId: Number; 
    userId: Number; 
    sublevel: string; 
    exercise: string; 
    date: Date; 
    time: TimeRanges; 
    points: number; 
    skillId: Number; 

}