import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import styles from "./views.module.css"
import BookCard from "../components/BookCard"
import { useEffect, useState } from "react"

function Popular() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const localeBooks = localStorage.getItem("books")

        if (localeBooks) {
            setBooks(popularBooks(JSON.parse(localeBooks)))
        }
    }, [])

    /*Ordena los libros por cantidad de lectores la cual es generada aleatoriamente*/
    function popularBooks(books) {
        const popularBooks = books.sort((bookA, bookB) => bookA.lectores - bookB.lectores)
        return popularBooks
    }

    return (
        <>
            <Navbar />
            <Hero firstText={""} secondText={"Libros mas populares!"} />
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

export default Popular
