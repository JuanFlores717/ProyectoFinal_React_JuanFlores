import {useEffect, useState } from "react"
import ItemCount from "../itemCount/itemCount"


const ItemDetail = ({products}) => {
    const [id, setId] = useState()
    useEffect(() => {
        setId(products?.id)
      },[])
    return(
       <div className="card">
                <h3 className="card__tittle">{products?.title}</h3>
                <img className="card__img" src={products?.image} alt="" />
                <p className="card__desc">{products?.description}</p>
                <p className="card__price">Precio : {products?.price}</p>
                <ItemCount product = {products}/>
        </div>
    )
}
export default ItemDetail