import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookForm from '../components/bookCrud/BookForm'
import { useState } from 'react'

function CreateBook() {
    const [online, setOnline] = useState(localStorage.getItem("online") === "true");

    return (
        <>
            <Navbar />
            {online ? <BookForm /> : <Hero firstText={"You dont have acces to this page"} secondText={"Please register and verify your user"} />}
            <Footer />
        </>
    )
}

export default CreateBook
