import { Link } from "react-router-dom"
import styles from "./components.module.css"
import OflineLinks from "./OflineLinks"
import OnlineLinks from "./OnlineLinks"
import { useState } from "react"

function Navbar() {
    const [online, setOnline] = useState(localStorage.getItem("online") === "true");

    return (
        <header className={styles["header"]}>
            <div className={styles["headerContainer"]}>
                <Link to="/">
                    <img src="/book.svg" alt="Logo" className={styles["logo"]} />
                </Link>
                {online ? <OnlineLinks /> : <OflineLinks />}
            </div>
            <nav>
                <Link></Link>
                <Link></Link>
            </nav>
        </header >
    )
}

export default Navbar
