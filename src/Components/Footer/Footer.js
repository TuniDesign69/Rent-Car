import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
    return (<div>
        <div className={styles.infos}>
            <div>
                <h1>For clients</h1>
                <p>About us</p>
                <p>Terms and rates</p>
                <p>Reviews</p>
                <p>Articles</p>
                <p>Contacts</p>
                
            </div>
            <div>
                <h1>Car park</h1>
                <p>Cabriolets</p>
                <p>Sports cars</p>
                <p>Premium</p>
                <p>Motorcycles</p>
                <p>Coupe</p>
            
            </div>
            
     
            <div>
                <h1>Main Office</h1>
                <div style={{display:"flex",flexDirection:"row"}}><img style={{marginRight:"20px"}} src="https://static.tildacdn.com/tild3331-3232-4665-a261-356436663238/Vector-1.svg" /> <p>Office 11, Al Asmawi Building</p></div>

                <p>Umm Al Sheif, Sheikh Zayed Road</p>

                <p>Dubai, UAE</p>
            </div>
        </div>
        <h4 style={{padding:"20px 20px  20px 5%",backgroundColor:"black",color:"white"}}>© Copyright Ferro Car Rental. Dubai. 2021</h4>
        </div>
    )
}

export default Footer
