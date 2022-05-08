import mongoose from "mongoose"
var clientSchema = mongoose.Schema({
nomclient: String,
email: String,
numtel: String
});
const Client = mongoose.model('Client', clientSchema);
export default Client