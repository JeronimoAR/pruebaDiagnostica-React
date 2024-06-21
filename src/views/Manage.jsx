import BookTable from "../components/BookTable"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "./views.module.css"

function manage() {
  return (
    <>
        <Navbar />
        <BookTable className={styles["bookTable"]} />
        <Footer /> 
    </>
  )
}

export default manage
