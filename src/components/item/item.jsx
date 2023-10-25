import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Item = ({products}) => {
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
                <Link to={`/item/${products?.id}`}>Ver más</Link>
        </div>
    )
}
export default Item