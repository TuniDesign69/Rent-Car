import React from 'react'
import styles from "./NavBar.module.css"
const NavBar = () => {
    return (
        <div className={styles.Nav}>
           <ul className={styles.Menu}>
               <li><img src="https://ferrorental.com/wp-content/uploads/2021/03/Ferro-logo-200x60px.png" style={{width:"100px"}}/></li>
               <li><a>Home</a></li>
               <li><a>Cars</a></li>
               <li><a>Services</a></li>
               <li><a>Contact Us</a></li>
           </ul>
           <ul className={styles.Media}>
               <li><img src="https://static.tildacdn.com/tild3837-3135-4535-b663-643636633666/youtube.svg"/></li>
               <li> <img src="https://static.tildacdn.com/tild3166-3364-4433-a461-373530343936/fb.svg"/></li>
               <li><img src="https://static.tildacdn.com/tild3734-3161-4336-b436-653932326638/inst.svg"/></li>
             
           </ul>
           <div className={styles.Contact}><img src="https://static.tildacdn.com/tild3330-3936-4365-b830-613037306435/phone.svg" /> <p>+971 50 11 99 113</p></div>
        </div>
    )
}

export default NavBar
