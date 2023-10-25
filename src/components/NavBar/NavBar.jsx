import { Link } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"
import { useEffect , useState} from "react"
const NavBar = () => {

    const [category, setCategory] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setCategory(json))
      },[])
    return(
        <nav className="navBar">
            <div className="navBar__logo">
                <Link to = {`/`}> 
                <h1 className= "navBar__logo-text">Peluches Estelares</h1>
            </Link>
            </div>
            <div>
                <ul className="navBar__list">
                    {category?.map((cat, index) => <Link to = {`./category/${cat}`} key={index} className="navBar__list-li">{cat}</Link>)}
                </ul>
            </div>
            <CardWidget/>
        </nav>
        )
    }
    
    export default NavBar