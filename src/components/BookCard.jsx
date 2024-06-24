import { Link } from "react-router-dom"
import styles from "./components.module.css"

function BookCard(props) {
    const { isbn, titulo, autor, genero, fecha, editorial, imagen } = props
    return (
        <>
            <Link to={`/detail/${isbn}`}>
                <figure className={styles["bookCard"]}>
                    <img src={imagen} alt={titulo} />
                    <figcaption>
                        <h3>{titulo}</h3>
                        <div>
                            <span>Autor: {autor}</span>
                            <span>Genero: {genero}</span>
                        </div>
                        <p>lanzamiento: {fecha}</p>
                        <p>Editorial: {editorial}</p>
                    </figcaption>
                </figure>
            </Link>
        </>
    )
}

export default BookCard
