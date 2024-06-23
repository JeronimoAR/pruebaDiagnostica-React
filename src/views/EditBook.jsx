import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import EditForm from '../components/bookCrud/EditForm'

function EditBook() {
  const { isbn } = useParams()
  const [online, setOnline] = useState(localStorage.getItem("online") === "true");

  return (
    <>
      <Navbar />
      {online? <EditForm isbn={isbn} />: <Hero firstText={"You dont have acces to this page"} secondText={"Please register and verify your user"} />}
      <Footer />
    </>
  )
}

export default EditBook
