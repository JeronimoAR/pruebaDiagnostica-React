import { Link } from "react-router-dom"

function BookCard(props) {
    const { isbn, titulo, autor, genero, fecha, editorial, imagen } = props
    return (
        <>
            <Link to={`/detail/${isbn}`}>
                <figure>
                    <img src={imagen} alt={titulo} />
                    <figcaption>
                        <h1>{titulo}</h1>
                        <div>
                            <h2>Autor: {autor}</h2>
                            <h2>Genero: {genero}</h2>
                        </div>
                        <div>
                            <h2>lanzamiento: {fecha}</h2>
                            <h2>Editorial: {editorial}</h2>
                        </div>
                    </figcaption>
                </figure>
            </Link>
        </>
    )
}

export default BookCard
