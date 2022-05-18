import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddlewre.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})


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


//set PORT number to PORT Variable from dotenv file
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))