import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-Parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddlewre.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("🚀     MongoDB Connection Successfully!")
})



//import routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

//calling routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//notfound middleware
app.use(notFound)

//errorhandler middleware
app.use(errorHandler)


import visaRouter from './routes/visas.js'
app.use("/visa", visaRouter)


import detailsRouter from './routes/details.js'
app.use("/details", detailsRouter)

app.listen(PORT, () => {
    console.log(`☄️      Server is Up and Running on port : ${PORT}`)
})
