import { Link } from "react-router-dom"
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

    // Función para descargar la tabla como CSV
    function downloadCSV(table_id, separator = ',') {
        // Selecciona las filas de la tabla
        var rows = document.querySelectorAll('table#' + table_id + ' tr');
        var csv = [];
        for (var i = 0; i < rows.length; i++) {
            var row = [],
                cols = rows[i].querySelectorAll('td, th');
            for (var j = 0; j < cols.length; j++) {
                // Limpia el texto para eliminar espacios y saltos de línea
                var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ').replace(/[\u0300-\u036f]/g, "");
                data = data.replace(/\"/g, '\"\"');
                // Agrega la cadena escapada al array
                row.push('"' + data + '"');
            }
            csv.push(row.join(separator));
        }
        var csv_string = csv.join('\n');
        // Descarga el archivo
        var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
        var link = document.createElement('a');
        link.style.display = 'none';
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function downloadPDF() {
        const tabla = document.getElementById('tabla'); // Reemplaza 'miIdDeTabla' con el ID de tu tabla
        const contenidoHtml = tabla.outerHTML;
        console.log(contenidoHtml);

        const estilo = `
        <style>
            table {
                width: 70%;
                border-collapse: separate;
                margin-bottom: 20px;
                background-color: #EBDACC;
            }

            table th {
                background-color: #8A3119;
            }

            table th,
            table td {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #945737;
                text-align: center;
            }

            table button {
                background-color: #945737;
                border-radius: 5px;
                border: 2px solid transparent;
                font-size: 12px;
                padding: 8px 12px;
                transition: 0.2s ease;
                color: white;
            }

            table tr td:nth-child(8) button{
                background-color: #a10003;
            }

            table tfoot td {
                border: none;
                background-color: #EBDACC;
                text-align: right;
            }

        </style>
        `;

        const titulo = `<title>Tabla a PDF</title>`;

        const ventanaNueva = window.open('', '', 'height=700,width=1320');
        ventanaNueva.document.write('<html moznomarginboxes mozdisallowselectionprint><head>');
        ventanaNueva.document.write(titulo);
        ventanaNueva.document.write(estilo);
        ventanaNueva.document.write('</head>');
        ventanaNueva.document.write('<body>');
        ventanaNueva.document.write(contenidoHtml);
        ventanaNueva.document.write('</body></html>');

        setTimeout(function () {
            ventanaNueva.print();
            ventanaNueva.close();
        }, 100);
    }

    return (
        <main>
            <h1>Lista de Libros</h1>
            <table id="tabla" className={styles["booktable"]}>
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
                            key={book.isbn}
                            ISBN={book.isbn}
                            titulo={book.titulo}
                            autor={book.autor}
                            genero={book.genero}
                            editorial={book.editorial}
                            año={book.fecha}
                        />
                    ))}
                </tbody>
            </table>
            <div className={styles["footBtns"]}>
                <button onClick={() => downloadPDF()}> Descargar como PDF</button>
                <button onClick={() => downloadCSV('tabla')}> Descargar como CSV</button>
                <Link to="/manage/create"><button>Ingresar un libro</button></Link>
            </div>
        </main>
    )
}

export default BookTable
