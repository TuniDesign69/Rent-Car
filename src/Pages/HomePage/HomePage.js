import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import NavBar from '../../Components/NavBar/NavBar'
import styles from "./HomePage.module.css"
const HomePage = () => {
    return (
        <div className={styles.home}>
           <div style={{position: "sticky"}}>
            <NavBar/>
            </div>
            <Main/>
            <Footer/>
           
          </div>
    )
}

export default HomePage
