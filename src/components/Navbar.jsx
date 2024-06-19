import { Link } from "react-router-dom"
import styles from "./components.module.css"

function Navbar() {
    return (
        <header className={styles["header"]}>
            <div className={styles["headerContainer"]}>
                <Link to="/">
                    <img src="/book.svg" alt="Logo" className={styles["logo"]} />
                </Link>

                <div className={styles["headerButtons"]}>
                    <Link to="/verify" className={styles["headerButtons"]}>Verify User</Link>
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
