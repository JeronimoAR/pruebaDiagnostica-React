import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookForm from '../components/bookCrud/BookForm'

function CreateBook() {
    return (
        <>
            <Navbar />
            <BookForm />
            <Footer />
        </>
    )
}

export default CreateBook
