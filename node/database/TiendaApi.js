
export const ProductsApi=async()=>{
  const URLAPI='https://api.escuelajs.co/api/v1/products'
  const res= await fetch(URLAPI)
  try {
    const data =await res.json();
    return data;
  } 
  catch (error) {
    console.log('Error:', error);
  };
}