import styles from "./crud.module.css"

function BookForm() {
    function handleNewBook(e) {
        e.preventDefault()
        const localeBooks = JSON.parse(localStorage.getItem("books"))
        let newISBN = 0

        localeBooks.forEach(book => {
            if (newISBN < Number(book.isbn)) {
                newISBN = Number(book.isbn) + 1
            }
        });

        let newViewres = Math.floor(Math.random() * 10000)

        let newBook = {
            "isbn": newISBN,
            "titulo": e.target.titulo.value,
            "autor": e.target.autor.value,
            "genero": e.target.genero.value,
            "fecha": e.target.fecha.value,
            "editorial": e.target.editorial.value ?? "https://www.bing.com/images/search?view=detailV2&ccid=H1gHhKVb&id=AA45872BF513C7B8DD25792A1A7B5288DE6CFAB0&thid=OIP.H1gHhKVbteqm1U5SrwpPgwHaFj&mediaurl=https%3a%2f%2fimg.freepik.com%2fvector-premium%2fvector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1f580784a55bb5eaa6d54e52af0a4f83%3frik%3dsPps3ohSexoqeQ%26pid%3dImgRaw%26r%3d0&exph=470&expw=626&q=imagen+predeterminada&simid=607991941950475799&FORM=IRPRST&ck=3C57A8B390FEEED0BADC3C0074D0EAF9&selectedIndex=9&itb=0",
            "imagen": e.target.link.value,
            "lectores": newViewres
        }

        localeBooks.push(newBook)
        localStorage.setItem("books", JSON.stringify(localeBooks))

        alert("libro registrado correctamente!")
    }
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

export default BookForm
