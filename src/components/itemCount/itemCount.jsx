import {useContext, useEffect, useState } from "react"
import { CartContext } from "../context/cartContext"


const ItemCount = (product) => {
    const [counter, setCounter] = useState(1)
    const [stock, setStock] = useState(0)
    const {addToCart} = useContext (CartContext)

    useEffect(() => {
        product.product && setStock(product.product.stock)
      },[product])
    
    const addItem = () => {
        stock > counter && (setCounter (counter + 1))

    }

    const subItem = () =>{
        counter > 1 && (setCounter (counter - 1))
    }


    return(
       <div>
            <div>
                <button onClick={subItem}>-</button>
                <p>Cantidad: {counter}</p>
                <button onClick={addItem}>+</button>
            </div>
            <p>Stock: {stock}</p>
            <button onClick={() => addToCart (product?.product, counter)}>añadir al carrito</button>
        </div>
    )
}
export default ItemCount