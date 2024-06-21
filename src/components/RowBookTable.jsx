import styles from "./components.module.css"

function RowBookTable(props) {
    const { ISBN, titulo, autor, genero, editorial, año } = props
    return (
        <tr>
            <td>{ISBN}</td>
            <td>{titulo}</td>
            <td>{autor}</td>
            <td>{genero}</td>
            <td>{editorial}</td>
            <td>{año}</td>
            <td><button>Editar</button></td>
            <td><button className={styles["deleteButton"]}>Eliminar</button></td>
        </tr>
    )
}

export default RowBookTable
