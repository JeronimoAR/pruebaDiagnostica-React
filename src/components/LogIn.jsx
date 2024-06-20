import styles from "./components.module.css"

function LogIn() {
    const handleUsers = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const users = JSON.parse(localStorage.getItem("users")) || []
        let existingUser = users.find((user) => user.email === email && user.password == password)

        if (!existingUser) {
            localStorage.setItem("online", false)
            return (
                alert("Correo o contraseña incorrectos")
            )
        }

        alert("Inicio de sesion exitoso")
        localStorage.setItem("online", true)
        window.location.href = "/"
    }
    return (
        <div className={styles["formulario-contenedor"]}>
            <div className={styles["login-container"]}>
                <h1>Ingresar</h1>
                <form id="loginForm" onSubmit={handleUsers}>
                    <input type="email" id="email" name="email" placeholder="Tu dirección de E-mail" required />
                    <input type="password" id="password" name="password" placeholder="Contraseña" required />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <input type="submit" value="Ingresar" />
                </form>
                <p>
                    * Al ingresar con Facebook o Google estás aceptando recibir ofertas
                    por email Tiendamia está protegida por reCAPTCHA y se aplican la
                    <a href="#">Política de Privacidad</a> y los
                    <a href="#">Términos de Servicio de Google</a>.
                </p>
            </div>

        </div>
    )
}

export default LogIn
