import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import EditForm from '../components/bookCrud/EditForm'

function EditBook() {
    const {isbn} = useParams()
  return (
    <>
     <Navbar />
     <EditForm isbn={isbn} />
     <Footer /> 
    </>
  )
}

export default EditBook
