import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/cartContext"
import styles from "./styles.module.css"

const OrderItem = ({products,qty}) => {
const [id, setId] = useState()
  const [total, setTotal] = useState(0)
  const {deleteItem} = useContext (CartContext)
  useEffect(() => {
    setId(products?.id)
  },[])
return(
    <div className={styles.cart}>
             <img className={styles.cart__img} src={products?.image} alt="" />
             <div className={styles.cart__data}>
                <h3 className={styles.cart__tittle}>{products?.title}</h3>
                <p className={styles.cart__desc}>{products?.description.substr(0, 100)}...</p>
                <p className={styles.cart__price}>Precio : {products?.price}</p>
             </div>
            <p className={styles.cart__price}>Cantidad: {qty}</p>  
            <p className={styles.cart__price}>Subtotal: {products?.price*qty}</p>
     </div>
 )
}

export default OrderItem