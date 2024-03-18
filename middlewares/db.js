import mongoose from "mongoose";

const db = (DB_URL)=>{
    mongoose.connect(DB_URL)
  .then(() => console.log('Connected!'));
}

export default db