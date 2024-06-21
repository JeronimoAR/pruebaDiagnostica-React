import styles from "./crud.module.css"
import { useEffect } from "react"

function EditBook({isbn}) {
    const [book, setBook] = useState()

    useEffect(() => {

        const localeBooks = JSON.parse(localStorage.getItem("books"))

        if (localeBooks) {
            setBook(localeBooks.filter(book => book.isbn === isbn))
        }

        console.log(book)
    }, [])
    return (
        <div className={styles["formulario-contenedor"]}>
            <div className={styles["bookForm-container"]}>
                <h1>Ingresa tu libro</h1>
                <form id="bookForm" onSubmit={handleNewBook}>
                    <input type="text" id="titulo" name="titulo" placeholder="El titulo de tu libro aqui:" required/>
                    <input type="text" id="autor" name="autor" placeholder="El autor de tu libro aqui:" required/>
                    <input type="text" id="genero" name="genero" placeholder="El genero de tu libro aqui:" required/>
                    <input type="text" id="fecha" name="fecha" placeholder="El año de lanzamiento de tu libro aqui:" required/>
                    <input type="text" id="editorial" name="editorial" placeholder="La editorial de tu libro aqui:" required/>
                    <input type="text" id="link" name="link" placeholder="link de la imagen de portada" />
                    <input type="submit" value="Ingresar Libro" />
                </form>
            </div>

        </div>

    )
}

export default EditBook
