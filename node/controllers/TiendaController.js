import { request } from 'express';
import {ProductsApi} from '../database/TiendaApi.js'


//** Metodos para el CRUD**/

//Mostrar todos los productos
export const getAllProducts=async (req,res)=>{
  try {
    const productos=await ProductsApi()
    res.json(productos)
    
  } catch (error) {
    console.log('Error:', error);
  }
}

//Mostrar un producto por su ID
export const getProduct=async (req,res)=>{
  try {
    const productos=await ProductsApi()
    const id=req.params.id
    console.log(id)
    const productoID = productos.find((item)=> item.id == id )
    res.json(productoID)
    
  } catch (error) {
    console.log('Error:', error);
  }
}