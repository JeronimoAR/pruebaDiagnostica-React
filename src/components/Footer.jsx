import { Link } from "react-router-dom"
import styles from "./components.module.css"

function Footer() {
    return (
        <>
            <footer>
                <div id="footer" className={styles["footerContainer"]}>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Ofertas
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Laptops
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Audio
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Auriculares
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Cómo comprar
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Formas de pago
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Envios
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Devoluciones
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Costos y tarifas
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Impuestos
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Facturación
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Mis pedidos
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Pedir nuevamente
                            </Link>
                        </li>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
                                Lista de deseos
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles["footerUl"]}>
                        <li className={styles["footerLi"]}>
                            <Link className={styles["footerLink"]} to="/">
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
