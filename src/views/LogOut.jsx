import { useEffect } from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function LogOut() {
    useEffect(() => {
        localStorage.setItem("online", false)
        setTimeout(() => {
            window.location.href = "/"
        },3000)
    }, [])
    return (
        <>
            <Navbar />
            <Hero firstText="Sesion finalizada" secondText="Tu sesion ha sido cerrada correctamente" />
            <Footer />
        </>
    )
}

export default LogOut
