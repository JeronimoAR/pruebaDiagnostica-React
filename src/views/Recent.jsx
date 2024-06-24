import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BookCard from "../components/BookCard"
import styles from "./views.module.css"

function Recent() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const localeBooks = localStorage.getItem("books")

        if (localeBooks) {
            setBooks(recentBooks(JSON.parse(localeBooks)))
        }
        
    }, [])

    /*Ordena los libros por el año de lanzamiento*/
    function recentBooks(books) {
        const popularBooks = books.sort((bookA, bookB) => new Date(bookB.fecha) - new Date(bookA.fecha))
        return popularBooks
    }

    return (
        <>
            <Navbar />
            <Hero firstText={""} secondText={"Libros mas Recientes!"} />
            <main>
                <div className={styles["booksSection"]}>
                    {books.map((each) => (
                        <BookCard
                            key={each.isbn}
                            isbn={each.isbn}
                            titulo={each.titulo}
                            autor={each.autor}
                            genero={each.genero}
                            fecha={each.fecha}
                            editorial={each.editorial}
                            imagen={each.imagen}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}


export default Recent
