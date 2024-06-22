import styles from "./components.module.css"
import { Link } from "react-router-dom"

function RowBookTable(props) {
    const { ISBN, titulo, autor, genero, editorial, año } = props

    function handleDelete(ISBN){
        const localeBooks = JSON.parse(localStorage.getItem("books"))
        let newBooks = localeBooks.filter(book => book.isbn !== ISBN)
        localStorage.setItem("books", JSON.stringify(newBooks))
        window.location.reload()
    }

    return (
        <tr>
            <td>{ISBN}</td>
            <td>{titulo}</td>
            <td>{autor}</td>
            <td>{genero}</td>
            <td>{editorial}</td>
            <td>{año}</td>
            <td><Link to={`/manage/editBook/${ISBN}`}><button>Editar</button></Link></td>
            <td><button className={styles["deleteButton"]} onClick={() => handleDelete(ISBN)}>Eliminar</button></td>
        </tr>
    )
}

export default RowBookTable
