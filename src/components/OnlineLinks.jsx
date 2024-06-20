import { Link } from "react-router-dom"
import styles from "./components.module.css"

function OnlineLinks() {
    
  return (
    <div className={styles["navLinks"]}>
      <Link to="/manageBooks" >ManageBooks</Link>
      <Link to="/recent" >Lo mas reciente</Link>
      <Link to="/popular" >Lo mas popular</Link>
      <Link to="/logOut" >Log out</Link>
    </div>
  )
}

export default OnlineLinks
