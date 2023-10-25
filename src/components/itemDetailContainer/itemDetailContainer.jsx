import { useState, useEffect } from "react"
import Item from "../item/item"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const {id} = useParams()
  const [products, setProducts] = useState()
  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>setProducts(json))
    },[id])

    return(
        <div className="cardContainer">
            <Item products={products}></Item>
        </div>
    )
}

    
    export default ItemDetailContainer