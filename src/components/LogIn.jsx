import styles from "./components.module.css"

function LogIn() {
    return (
        <div className={styles["formulario-contenedor"]}>
            <div className={styles["login-container"]}>
                <h1>Ingresar</h1>
                <form id="loginForm">
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
