import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
  const [total, setTotal] = useState(0)
  const {cartList} = useContext (CartContext)

  useEffect(() => {
    const totalQty = cartList.reduce((total, product) => {
      return total + product?.qty;
    }, 0);
    setTotal(totalQty);
  },[cartList])

return(
    <Link to = {`/cart`}> 
    <div className="carWidget">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart cardWidget__img" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <p className="carWidget__text">{total}</p>
    </div>
    </Link>
)
}

export default CartWidget