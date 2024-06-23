import BookTable from "../components/BookTable"
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import styles from "./views.module.css"
import { useState } from "react";

function manage() {
  const [online, setOnline] = useState(localStorage.getItem("online") === "true");
  return (
    <>
      <Navbar />
      {online ? <BookTable className={styles["bookTable"]} /> : <Hero firstText={"You dont have acces to this page"} secondText={"Please register and verify your user"} />}
      <Footer />
    </>
  )
}

export default manage
