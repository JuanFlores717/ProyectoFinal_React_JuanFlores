import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
const Item = ({products}) => {
    const [id, setId] = useState()
    useEffect(() => {
        setId(products?.id)
      },[])
    return(
       <div className={styles.card}>
                <h3 className={styles.card__tittle}>{products?.title}</h3>
                <img className={styles.card__img} src={products?.image} alt="" />
                <p className={styles.card__desc}>{products?.description.substr(0, 100)}...</p>
                <p className={styles.card__price}>Precio : {products?.price}</p>
                <Link to={`/item/${products?.id}`}>Ver más</Link>
        </div>
    )
}
export default Item