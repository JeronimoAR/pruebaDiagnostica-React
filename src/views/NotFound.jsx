import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from '../components/Hero'

function NotFound() {
  return (
    <>
      <Navbar />
      <Hero firstText="404" secondText="Not Found"/>
      <Footer />
    </>
  )
}

export default NotFound
