import { Link } from "react-router-dom"
import styles from "./components.module.css"

function OnlineLinks() {
    function logOut(){
        localStorage.setItem("online", false)
        window.location.href = "/"
    }
  return (
    <div className={styles["navLinks"]}>
      <Link to="/manageBooks" >Administrar Libros</Link>
      <Link to="/recent" >Lo mas reciente</Link>
      <Link to="/popular" >Lo mas popular</Link>
      <Link to="/search" ><img src="/search.svg" alt="search" /></Link>
      <Link to="#" onClick={logOut}><img src="/logOut.svg" alt="search" /></Link>
    </div>
  )
}

export default OnlineLinks
