const express = require('express');
const mongoose = require('mongoose');
const app = express();

//routes
const userRoutes = require('./routes/user')



//mongodb connection
const uri = "mongodb+srv://hansonolu1:RTkyeWduT6LPSYt8@cluster0.mewwdyt.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("Connected to MongoDB!")
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(express.json()); // Used to parse JSON bodies
app.use('/api', userRoutes);


//listening for connection on port 8000
app.listen(8000, () => {
  console.log("Server started on port 8000");
});