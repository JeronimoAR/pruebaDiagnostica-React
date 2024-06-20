import LogIn from "../components/LogIn"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "./views.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Register from "../components/Register"

function Verify() {
    const [registro, setRegistro] = useState(true)

    return (
        <div>
            <Navbar />
            <div className={styles["form-container"]}>
                {registro ? <LogIn /> : <Register />}
                <div className={styles["divider"]}>{registro ? "¿No tienes una cuenta?" : "Ya tienes cuenta?"}</div>
                <div className={styles["register-link"]}>
                    <Link to="/verify" onClick={() => setRegistro(!registro)}>{registro ? "Registrate" : "Ingresa"}</Link>
                </div>
                <p>
                    Al registrarte estás aceptando nuestros
                    <a href="#">Términos y Condiciones</a> y nuestras
                    <a href="#">Políticas de Privacidad</a>.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Verify
