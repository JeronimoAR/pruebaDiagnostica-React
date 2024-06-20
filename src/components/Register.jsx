import styles from "./components.module.css"

function Register() {
  return (
    <div className={styles["formulario-contenedor"]}>
        <div className={styles["register-container"]}>
            <h1>Regístrate</h1>
            <form id="registerForm">
                <input type="email" id="email" name="email" placeholder="E-mail:" required />
                <input type="password" id="password" name="password" placeholder="Contraseña:" required />
                <div className={styles["checkbox"]}>
                    <input type="checkbox" id="offers" name="offers" />
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
