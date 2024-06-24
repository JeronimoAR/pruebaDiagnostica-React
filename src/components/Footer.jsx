import { Link } from "react-router-dom"
import styles from "./components.module.css"

function Footer() {
    return (
        <>
            <footer>
                <div id="footer" className={styles["footerContainer"]}>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Libros
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/popular">
                                Popular
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/recent">
                                Ultimos Libros
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/verify">
                                Registrate
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className={styles["footerCopyright"]}>
                    Biblioteca
                </div>
            </footer>

        </>
    )
}

export default Footer
