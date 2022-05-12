import mongoose from "mongoose" 
var categorieSchema = mongoose.Schema({ nomcategorie: String }) 
const Categorie = mongoose.model('Categorie', categorieSchema); 
export default Categorie;