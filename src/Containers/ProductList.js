
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponect from './ProductComponect'
import axios from 'axios'
import { setProducts } from '../redux/action/productAction'


const ProductList = () => {
    const dispatch =useDispatch()
    const featchProdeuct =async() => {
const res = await axios.get('http://localhost:4000/api/postlist').catch((error)=>{
console.log("Error",res
)
})
dispatch(setProducts(res.data.data))
    }
    useEffect(()=>{
        featchProdeuct()
    },[])
  return (
    <>  
<ProductComponect/>
    </>
  )
}

export default ProductList
