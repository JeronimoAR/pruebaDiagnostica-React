import { Link } from "react-router-dom"
import styles from "./components.module.css"

function Navbar() {
    return (
        <header className={styles["header"]}>
            <div className={styles["headerContainer"]}>
                <Link to="/">
                    <img src="/book.svg" alt="Logo" className={styles["logo"]} />
                </Link>

                <div>
                    <Link to="/verify" >Verify User</Link>
                </div>
            </div>
            <nav>
                <Link></Link>
                <Link></Link>
            </nav>
        </header>
    )
}

export default Navbar
