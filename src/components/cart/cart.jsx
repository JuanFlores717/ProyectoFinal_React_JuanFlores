import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/cartContext"
import CartItem from "../cartItem/cartItem"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cartList, removeList } = useContext(CartContext)
    const [total, setTotal] = useState (0)
    useEffect(() => {

        const totalPrice = cartList.reduce((total, product) => {
            const quantity = product?.qty || 0
            const price = product?.item?.price || 0
            return total + (quantity*price)
          }, 0);
        setTotal(totalPrice);
      },[cartList])
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {cartList?.map(pr => <CartItem products={pr.item} qty={pr.qty} key={pr.id}></CartItem>)}
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.infoContainer__p}>Costo total: {total}</p>
                <div className={styles.infoContainer__buttons}>
                <button onClick={removeList} className={styles.infoContainer__buttons_pb}>Vaciar Carro</button>
                    <Link to={`/order`}>
                        <button className={styles.infoContainer__buttons_pb}>Confirmar Compra</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart