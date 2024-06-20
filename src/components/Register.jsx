import { useState } from "react"
import styles from "./components.module.css"

function Register() {
    const [checked, setChecked] = useState(false)
    const handleNewUsers = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const offers = checked
        const users = JSON.parse(localStorage.getItem("users")) || []
        let existingUser = users.find((user) => user.email === email)

        if (existingUser) {
            return (
                alert("El usuario ya esta registrado")
            )
        }

        users.push({ email, password, offers })
        localStorage.setItem("users", JSON.stringify(users))

        return (alert("Usuario guardado correctamente"))
    }
    return (
        <div className={styles["formulario-contenedor"]}>
            <div className={styles["register-container"]}>
                <h1>Regístrate</h1>
                <form id="registerForm" onSubmit={handleNewUsers}>
                    <input type="email" id="email" name="email" placeholder="E-mail:" required />
                    <input type="password" id="password" name="password" placeholder="Contraseña:" required />
                    <div className={styles["checkbox"]}>
                        <input type="checkbox" id="offers" name="offers" checked={checked} onClick={() => setChecked(!checked)}/>
                        <label for="offers">Recibir Ofertas!</label>
                    </div>
                    <input id="btn-sub" type="submit" value="Regístrate" />
                </form>
                <p>
                    * Al ingresar con Facebook o Google estás aceptando recibir ofertas
                    por
                    email Tiendamia está protegida por reCAPTCHA y se aplican la
                    <a href="#">Política de Privacidad</a> y los
                    <a href="#">Términos de Servicio de Google</a>.
                </p>
            </div>
        </div>
    )
}

export default Register
