import RowBookTable from "./RowBookTable"
import styles from "./components.module.css"
import { useState, useEffect } from "react"

function BookTable() {
    const [books, setBooks] = useState([])
    useEffect(() => {

        const localeBooks = localStorage.getItem("books")

        if (localeBooks) {
            setBooks(JSON.parse(localeBooks))
        }
    }, [])

    return (
        <main>
            <h1>Lista de Libros</h1>
            <table className={styles["booktable"]}>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>Editorial</th>
                        <th>Año de Publicación</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <RowBookTable
                            ISBN={book.isbn}
                            titulo={book.titulo}
                            autor={book.autor}
                            genero={book.genero}
                            editorial={book.editorial}
                            año={book.fecha}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={8}><button>Ingresar un libro</button></td>
                    </tr>
                </tfoot>
            </table>
        </main>
    )
}

export default BookTable
