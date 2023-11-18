import { Link } from "react-router-dom"
import CartWidget from "../cartWidget/CartWidget"
import { useEffect , useState} from "react"
import { db } from "../firebase/client"
import { getDocs, collection } from "firebase/firestore"

const NavBar = () => {

    const [category, setCategory] = useState()
    useEffect(() => {
        const productsRef = collection(db, "products")
        
        getDocs(productsRef)
        .then((snapshot) => {
            setCategory([...new Set(snapshot.docs.map(doc => doc.data().categoryId))]);
        })
        .catch(e => console.error(e))
    },[])
    function firtCharToUpperCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    return(
        <nav className="navBar">
            <div className="navBar__logo">
                <Link to = {`/`}> 
                <h1 className= "navBar__logo-text">Peluches Estelares</h1>
            </Link>
            </div>
            <div>
                <ul className="navBar__list">
                    {category?.map((cat, index) => <Link to = {`./category/${cat}`} key={index} className="navBar__list-li">{firtCharToUpperCase(cat)}</Link>)}
                </ul>
            </div>
            <CartWidget/>
        </nav>
        )
    }
    
    export default NavBar