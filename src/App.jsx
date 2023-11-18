import './App.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartComponentContext from './components/context/cartContext'
import Cart from './components/cart/cart'
import Order from './components/order/order'
function App() {

  return (
   <CartComponentContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path= "/" element={<ItemListContainer/>}></Route>
          <Route exact path= "/category/:id" element={<ItemListContainer/>}></Route>
          <Route exact path= "/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route exact path= "/cart" element={<Cart/>}></Route>
          <Route exact path= "/order" element={<Order/>}></Route>
          {/* <Route exact path= "*" element={<NotFound/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </CartComponentContext>
  )
}

export default App
