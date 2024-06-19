import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

function home() {
  return (
    <>
      <Navbar />
      <Hero firstText="Encuentra tus libros favoritos!" secondText="Registra tu propio libro verificando tu perfil"/>

      <Footer />
    </>
  )
}

export default home
