import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path= "/" element={<ItemListContainer/>}></Route>
        <Route exact path= "/category/:id" element={<ItemListContainer/>}></Route>
        <Route exact path= "/item/:id" element={<ItemDetailContainer/>}></Route>
        {/* <Route exact path= "*" element={<NotFound/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
