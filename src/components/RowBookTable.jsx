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
            <td></td>
            <td></td>
        </tr>
    )
}

export default RowBookTable
