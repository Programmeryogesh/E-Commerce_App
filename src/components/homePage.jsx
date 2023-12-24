import React, { useEffect, useState } from "react";

import CardProduct from "./producetdatails";
function HomePage() {
    const [ProductData , setProductData] = useState()
    async function GetData(){
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        // console.log(result);
        setProductData(result);
       
    }
    useEffect(()=>{
        GetData()
    } , [])
   
    return (<>
       {ProductData &&  <CardProduct ProductData = {ProductData} />}
      
       
    </>)
}
export default HomePage;