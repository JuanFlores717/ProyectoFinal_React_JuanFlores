import {useEffect, useState } from "react"
import ItemCount from "../itemCount/itemCount"
import styles from "./styles.module.css"

const ItemDetail = ({products}) => {
    const [id, setId] = useState()
    useEffect(() => {
        setId(products?.id)
      },[])
    return(
       <div className={styles.card}>
                <h3 className={styles.card__tittle}>{products?.title}</h3>
                <img className={styles.card__img} src={products?.image} alt="" />
                <p className={styles.card__desc}>{products?.description}</p>
                <p className={styles.card__price}>Precio: {products?.price}</p>
                <ItemCount product = {products}/>
        </div>
    )
}
export default ItemDetail