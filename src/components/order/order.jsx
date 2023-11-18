import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/cartContext"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import OrderItem from "../orderItem/orderItem"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/client"
import OrderFb from "../orderFB/orderFB"

const Order = () => {
    const {cartList,removeList} = useContext(CartContext)
    const [total, setTotal] = useState (0)
    const [orderId, setOrderId] = useState ()
    useEffect(() => {

        const totalPrice = cartList.reduce((total, product) => {
            const quantity = product?.qty || 0
            const price = product?.item?.price || 0
            return total + (quantity*price)
          }, 0);
        setTotal(totalPrice);
      },[cartList])
    const confirmOrder = () => {
            const order = {
              buyer: {name: "Juan", phone: "1155889966", email: "juan@flores.com"},
              items: cartList,
              total: total
            }
        
            const orderCollection = collection(db, 'orders')
        
            addDoc(orderCollection, order).then(({id}) => setOrderId(id))
            removeList()
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.container__tittle}>Finalizar compra</h1>
            <div className={styles.cartContainer}>
                {cartList?.map(pr => <OrderItem products={pr.item} qty={pr.qty} key={pr.id}></OrderItem>)}
                {orderId && <OrderFb orderId={orderId}/>}
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.infoContainer__p}>Costo total: {total}</p>
                <div className={styles.infoContainer__buttons}>
                    <Link to={`/cart`}>
                        <button className={styles.infoContainer__buttons_pb}>Volver al Carrito</button>
                    </Link>
                    <button onClick={confirmOrder} className={styles.infoContainer__buttons_pb}>¡Confirmar Compra!</button>
                </div>
            </div>
        </div>
    )
}

export default Order