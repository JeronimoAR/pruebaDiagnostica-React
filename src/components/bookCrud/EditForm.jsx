import { useEffect, useState } from "react"
import styles from "./crud.module.css"

function EditForm({ isbn }) {
    const [book, setBook] = useState("")

    useEffect(() => {

        const localeBooks = JSON.parse(localStorage.getItem("books"))
        
        if (localeBooks) {
            setBook(localeBooks.find((book) => book.isbn == Number(isbn)))
        }

        console.log(book)
        
    }, [isbn])

    function handleEditBook(e) {
        e.preventDefault()
        const localeBooks = JSON.parse(localStorage.getItem("books"))
        const deletePrevBook = localeBooks.find((book) => book.isbn == Number(isbn))
        let newBooks = localeBooks.filter(book => book.isbn !== deletePrevBook.isbn)
        let link = ""

        if(e.target.link.value == ""){
            link = "/NotFound.jpg"
        }

        let newBook = {
            "isbn": isbn,
            "titulo": e.target.titulo.value,
            "autor": e.target.autor.value,
            "genero": e.target.genero.value,
            "fecha": e.target.fecha.value,
            "editorial": e.target.editorial.value,
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
                <form id="bookForm" onSubmit={handleEditBook}>
                    <input type="text" id="titulo" name="titulo" placeholder={book.titulo} required />
                    <input type="text" id="autor" name="autor" placeholder={book.autor} required />
                    <input type="text" id="genero" name="genero" placeholder={book.genero} required />
                    <input type="text" id="fecha" name="fecha" placeholder={book.fecha} required />
                    <input type="text" id="editorial" name="editorial" placeholder={book.editorial} required />
                    <input type="text" id="link" name="link" placeholder={book.imagen} />
                    <input type="submit" value="Ingresar Libro" />
                </form>
            </div>

        </div>

    )
}

export default EditForm
