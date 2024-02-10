import express from "express";
import cors from "cors";
import productRoutes from './routes/routes.js'

const app=express()
app.use(cors());
app.use(express.json())
app.use('/products',productRoutes)

app.get('/',()=>{
  console.log("Welcome to the API")
})

app.listen(8000,()=>{
  console.log("Server is running on port http://localhost:8000/")
})