import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import styles from "./views.module.css"
import BookCard from "../components/BookCard"
import { useState, useEffect } from "react"

function Search() {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    useEffect(() => {
        const localeBooks = localStorage.getItem("books")

        if (localeBooks) {
            setBooks(JSON.parse(localeBooks))
            setFilteredBooks(JSON.parse(localeBooks))
        }
    }, [])

    function filterBooks(e) {
        const text = e.target.value;
        const found = books.filter((each) => each.titulo.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(text.toLowerCase()) ||
            each.autor.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(text.toLowerCase()) ||
            each.isbn.toString().includes(text.toLowerCase()) ||
            each.genero.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(text.toLowerCase()));
        setFilteredBooks(found)

    }

    return (
        <>
            <Navbar />
            <Hero firstText={""} secondText={"Busca tu libro favorito"} />
            <main className={styles["booksSection"]}>
                <form className={styles["searchImput"]}>
                    <input
                        type="text"
                        placeholder="Search"
                        id="search"
                        onChange={filterBooks}
                    />
                </form>
                <div className={styles["filteredBooks"]}>
                    {filteredBooks.map((each) => (
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

export default Search
