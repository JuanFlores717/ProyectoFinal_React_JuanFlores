import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
import { db } from "../firebase/client"
import { getDocs, doc, getDoc, collection } from "firebase/firestore"


const ItemDetailContainer = () => {
  const {id} = useParams()
  const [products, setProducts] = useState()
/*   useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>setProducts(json))
    },[id]) */

    useEffect(() => {
        const productsRef = doc(db, "products", `${id}`)
        
        getDoc(productsRef)
        .then((snapshot) => {
            if(snapshot.exists()){
                setProducts({id: snapshot.id, ...snapshot.data()})
            }
        })
    },[id]) 

    return(
        <div className="cardContainer">
            <ItemDetail products={products}></ItemDetail>
        </div>
    )
}

    
    export default ItemDetailContainer