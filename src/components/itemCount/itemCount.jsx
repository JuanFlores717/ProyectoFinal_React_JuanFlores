import {useContext, useEffect, useState } from "react"
import { CartContext } from "../context/cartContext"
import styles from "./styles.module.css"

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
       <div className={styles.container}>
            <div className={styles.counterContainer}>
                <button onClick={subItem} className={styles.counterContainer__pb}>-</button>
                <p className={styles.counterContainer__p}>Cantidad: {counter}</p>
                <button onClick={addItem} className={styles.counterContainer__pb}>+</button>
            </div>
            <p className={styles.container__p}>Stock: {stock}</p>
            <button className={styles.container__pb} onClick={() => addToCart (product?.product, counter)}>Añadir al carrito</button>
        </div>
    )
}
export default ItemCount