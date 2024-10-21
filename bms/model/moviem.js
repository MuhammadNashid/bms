import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: { type: String }, 
    rating: { type: Number }, 
    vote: { type: Number }, 
    visual: { type: String }, 
    lang: { type: String },
    duration: { type: String }, 
    category: { type: String }, 
    released: { type: String }, 
    about: { type: String },  
    cardpic: { type: String }, 
    bgpic: { type: String }, 
});


export default mongoose.model.movies||mongoose.model('movies',movieSchema)