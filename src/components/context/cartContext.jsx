import { createContext, useState } from "react";

export const CartContext = createContext();

const CartComponentContext = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [executing, setExecuting] = useState(false);

    const addToCart = (item, qty) => {
        if (executing) {
            return
        }
        setExecuting(true);
        const newItem = {
            item: item,
            qty: qty
        }
        if (cartList.some(cartItem => cartItem?.item.id === item.id)) {
            setCartList(cartList.map(cartItem => {
                if (cartItem.item.id === item.id) {
                    return { ...cartItem, qty: cartItem.qty + qty }
                }
            }))
        } else {
            setCartList([...cartList, newItem])
        }
        setExecuting(false);
    }
    const removeList = () => {
        setCartList([])
    }
    const deleteItem = (id) => {
        setCartList(cartList?.filter(item => item.item.id !== id))
    }

    return (
        <CartContext.Provider value={{ cartList, setCartList, addToCart, removeList, deleteItem }}>
            {children}
        </CartContext.Provider>
    )

}
export default CartComponentContext