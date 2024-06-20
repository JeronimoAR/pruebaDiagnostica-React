import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import styles from "./views.module.css"
import BookCard from "../components/BookCard"
import books from "../assets/books.json"

function home() {


    return (
        <>
            <Navbar />
            <Hero firstText="Encuentra tus libros favoritos!" secondText="Registra tu propio libro verificando tu perfil" />
            <section className={styles["booksSection"]}>
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
            </section>
            <Footer />
        </>
    )
}

export default home
