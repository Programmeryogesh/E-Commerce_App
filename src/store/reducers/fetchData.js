import { useState } from "react";




  const [ProductData , setProductData] = useState()
  async function GetData(){
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    
    setProductData(result)
}

    GetData()


export default GetData;