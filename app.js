import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import clientRouter from "./routes/client.route.js"
import categorieRouter from "./routes/categorie.route.js";
import montreRouter from "./routes/montre.route.js"; 
import userRouter from "./routes/user.route.js"

const app = express();
app.listen(4000,function() {
    console.log("Le serveur écoute sur le port 6000")
})

dotenv.config();
app.use(express.json());
app.use(cors());
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.use('/api/clients', clientRouter);
app.get("/",(req,res)=>{
res.send("Bibliothèque");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
app.use('/api/categories', categorieRouter);
app.use('/api/montres', montreRouter); 
app.use('/api/users', userRouter);