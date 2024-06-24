import { useEffect, useState } from "react"
import styles from "./crud.module.css"

function EditForm({ isbn }) {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const localeBooks = JSON.parse(localStorage.getItem("books"));
        if (localeBooks) {
            const foundBook = localeBooks.find((book) => book.isbn === Number(isbn));
            setBook(foundBook);
        }
    }, [isbn]);

    function handleEditBook(e) {
        e.preventDefault()
        const localeBooks = JSON.parse(localStorage.getItem("books"))
        const deletePrevBook = localeBooks.find((book) => book.isbn == Number(isbn))
        let newBooks = localeBooks.filter(book => book.isbn !== deletePrevBook.isbn)
        let link = ""

        if (e.target.link.defaultValue == "") {
            link = "/NotFound.jpg"
        }

        let newBook = {
            "isbn": isbn,
            "titulo": e.target.titulo.defaultValue,
            "autor": e.target.autor.defaultValue,
            "genero": e.target.genero.defaultValue,
            "fecha": e.target.fecha.defaultValue,
            "editorial": e.target.editorial.defaultValue,
            "imagen": link,
            "lectores": deletePrevBook.lectores
        }

        newBooks.push(newBook)
        newBooks.sort((bookA, bookB) => bookA.isbn - bookB.isbn)
        localStorage.setItem("books", JSON.stringify(newBooks))
        window.location.href = "/"
    }

    return (
        <div className={styles["formulario-contenedor"]}>
            <div className={styles["bookForm-container"]}>
                <h1>Ingresa tu libro</h1>
                <form id="bookForm" className={styles["bookForm"]} onSubmit={handleEditBook}>
                    <input type="text" id="titulo" name="titulo" defaultValue={book.titulo} />
                    <div className={styles["formSeparator"]}>
                        <input type="text" id="autor" name="autor" defaultValue={book.autor} />
                        <input type="text" id="genero" name="genero" defaultValue={book.genero} />
                    </div>
                    <div className={styles["formSeparator"]}>
                        <label htmlFor="fecha">Ingresa la fecha de lanzamiento de tu libro aqui:</label>
                        <input type="date" id="fecha" name="fecha" defaultValue={book.fecha} required />
                    </div>
                    <div className={styles["formSeparator"]}>
                        <input type="text" id="editorial" name="editorial" defaultValue={book.editorial} />
                        <input type="text" id="link" name="link" />
                    </div>
                    <input type="submit" defaultValue="Ingresar Libro" />
                </form>
            </div>

        </div>

    )
}

export default EditForm
