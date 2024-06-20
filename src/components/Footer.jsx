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
                                Ofertas
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Laptops
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Audio
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Auriculares
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Cómo comprar
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Formas de pago
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Envios
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Devoluciones
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Costos y tarifas
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Impuestos
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Facturación
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Mis pedidos
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Pedir nuevamente
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Lista de deseos
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link to="/">
                                Garantía
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
