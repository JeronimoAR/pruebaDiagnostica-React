import { Link } from "react-router-dom"
import styles from "./components.module.css"

function OflineLinks() {
  return (
    <div className={styles["navLinks"]}>
      <Link to="/verify" >Verificar Usuario</Link>
      <Link to="/recent" >Lo mas reciente</Link>
      <Link to="/popular" >Lo mas popular</Link>
      <Link to="/search" ><img src="/search.svg" alt="search" /></Link>
    </div>
  )
}

export default OflineLinks
