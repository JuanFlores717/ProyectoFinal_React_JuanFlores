import { useState, useEffect } from "react"
import Item from "../item/item"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const {id} = useParams()
  const [products, setProducts] = useState()
  const url = id ? (`https://fakestoreapi.com/products/category/${id}`) : (`https://fakestoreapi.com/products`)
  useEffect(() => {
      fetch(`${url}`)
      .then(res=>res.json())
      .then(json=>setProducts(json))
    },[id])
    return(
        <div className="cardContainer">
            {products?.map (pr => <Item products={pr} key ={pr.id}></Item>)}
        </div>
    )
}

    
    export default ItemListContainer