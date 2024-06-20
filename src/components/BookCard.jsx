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
                        <div>
                            <span>lanzamiento: {fecha}</span>
                            <span>Editorial: {editorial}</span>
                        </div>
                    </figcaption>
                </figure>
            </Link>
        </>
    )
}

export default BookCard
