import { useState, useEffect } from "react"
import Item from "../item/item"
import { useParams } from "react-router-dom"
import { db } from "../firebase/client"
import { getDocs, collection, query, where } from "firebase/firestore"
import styles from "./styles.module.css"

const ItemListContainer = () => {
    const { id } = useParams()
    const [products, setProducts] = useState()
    useEffect(() => {

        const productsRef = query (
            collection(db, "products"),
            id && where("categoryId", "==", id)
        )
        getDocs(productsRef)
        .then((snapshot) => {
            setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
        .catch(e => console.error(e))
    },[id])

    return (
        <div className={styles.cardContainer}>
            {products?.map(pr => <Item products={pr} key={pr.id}></Item>)}
        </div>
    )
}


export default ItemListContainer