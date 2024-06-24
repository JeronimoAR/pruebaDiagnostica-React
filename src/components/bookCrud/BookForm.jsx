import styles from "./crud.module.css"

function BookForm() {
    function handleNewBook(e) {
        e.preventDefault()
        const localeBooks = JSON.parse(localStorage.getItem("books"))
        let newISBN = 0
        let link = ""

        localeBooks.forEach(book => {
            if (newISBN < Number(book.isbn)) {
                newISBN = Number(book.isbn) + 1
            }
        });

        if (e.target.link.value == "") {
            link = "/NotFound.jpg"
        }
        let newViewres = Math.floor(Math.random() * 10000)

        let newBook = {
            "isbn": newISBN,
            "titulo": e.target.titulo.value,
            "autor": e.target.autor.value,
            "genero": e.target.genero.value,
            "fecha": e.target.fecha.value,
            "editorial": e.target.editorial.value,
            "imagen": link,
            "lectores": newViewres
        }

        localeBooks.push(newBook)
        localStorage.setItem("books", JSON.stringify(localeBooks))

        alert("libro registrado correctamente!")
        window.location.href = "/"
    }
    return (
        <div className={styles["formulario-contenedor"]}>
            <div className={styles["bookForm-container"]}>
                <h1>Ingresa tu libro</h1>
                <form id="bookForm" className={styles["bookForm"]} onSubmit={handleNewBook}>
                    <input type="text" id="titulo" name="titulo" placeholder="El titulo de tu libro aqui:" required />
                    <div className={styles["formSeparator"]}>
                        <input type="text" id="autor" name="autor" placeholder="El autor de tu libro aqui:" required />
                        <input type="text" id="genero" name="genero" placeholder="El genero de tu libro aqui:" required />
                    </div>
                    <div className={styles["formSeparator"]}>
                        <label htmlFor="fecha">Ingresa la fecha de lanzamiento de tu libro aqui:</label>
                        <input type="date" id="fecha" name="fecha" required />
                    </div>
                    <div className={styles["formSeparator"]}>
                        <input type="text" id="editorial" name="editorial" placeholder="La editorial de tu libro aqui:" required />
                        <input type="text" id="link" name="link" placeholder="link de la imagen de portada" />
                    </div>
                    <input type="submit" value="Ingresar Libro" />
                </form>
            </div>

        </div>

    )
}

export default BookForm
