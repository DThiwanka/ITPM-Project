const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const cors = require('cors');

const app = express();

//Import Routes
const postRoutes = require('./BackEnd/routes/UserProfile_Routes/posts');
const customerReport = require('./BackEnd/routes/pdfgenerator/customer_Report')
//App middleware
app.use(bodyParser.json());
app.use(cors());

//Route middleware
app.use(postRoutes);
app.use('/profile',customerReport);
const PORT = 8000;
//const DB_URL = 'mongodb+srv://dthiwanka:dbpass112@cluster0.n4wch.mongodb.net/ProjectDatabase?retryWrites=true&w=majority';
                     // MERN Account -> Dulthiwanka2015@gmail.com
const DB_URL = 'mongodb+srv://itpproject:projectpass@cluster0.ximc9.mongodb.net/customerdb?retryWrites=true&w=majority';
                    //dulajthiwanka909@gmail.com


           

mongoose.connect(DB_URL,{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
})

.then(() => {
    console.log("Mongo DB Connectected");
})
.catch(err => console.error("DB Connectection error",err));



app.listen(PORT, ()=> {
    console.log(`🚀 App is Running on ${PORT}`);
});