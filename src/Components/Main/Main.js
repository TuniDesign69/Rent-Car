import React from 'react'
import styles from "./Main.module.css"
import "./Main.css"
import Car from '../Car/Car'
import carIge1 from "../../Assets/Cars/Screen-Shot-2021-04-11-at-11.37.24-AM.png"
import carIge2 from "../../Assets/Cars/IMG_AF2E4686BA21-5.jpg"
import carIge3 from "../../Assets/Cars/IMG_5E613F55EDD6-1.jpg"
import carIge4 from "../../Assets/Cars/Screen-Shot-2021-04-04-at-12.16.00-PM.png"
import carIge5 from "../../Assets/Cars/Screen-Shot-2021-03-31-at-1.19.47-PM.png"
import carIge6 from "../../Assets/Cars/Screen-Shot-2021-03-30-at-2.44.06-PM.png"
import carIge7 from "../../Assets/Cars/Screen-Shot-2021-04-04-at-12.15.42-PM.png"
const Main = () => {
    const tab=[{source:carIge1 ,name:'McLaren 570s Spyder Orange' , price:3099 ,Passengers:2 ,Luggage:2 ,Doors:2 },{source:carIge2 ,name:'Lamborghini Urus ' , price:4000,Passengers:2 ,Luggage:2 ,Doors:2 },{source:carIge3 ,name:'Lamborghini Huracán EVO ' , price:3399 ,Passengers:2 ,Luggage:2 ,Doors:2},{source:carIge4 ,name:'Mercedes S 450 Black ' , price:1099,Passengers:2 ,Luggage:2 ,Doors:2 },{source:carIge5 ,name:'Rolls Royce Cullinan ' , price:6500 ,Passengers:2 ,Luggage:2 ,Doors:2},{source:carIge6 ,name:'Range Rover Sport ' , price:1199,Passengers:2 ,Luggage:2 ,Doors:2 },{source:carIge7 ,name:'Mercedes S 450 White ' , price:1099,Passengers:2 ,Luggage:2 ,Doors:"Auto" }]
    return (
        <div className={styles.Main}>
            <h1 className={styles.text1}>Luxury & Sport Car Rental Service in Dubai</h1>
            <div className={styles.cars}>
             <div className={styles.OneCar}>
                 <img src="https://static.tildacdn.com/tild3663-3165-4331-a164-376235666465/2.svg" style={{width:"100px",height:"30px"}}/>
                 <p>All cars</p>
             </div>
             <div className={styles.OneCarb}>
                 <img src="https://static.tildacdn.com/tild3563-3161-4464-b432-313839323634/photo.png" style={{width:"100px",height:"30px"}}/>
                 <p>SUVs</p>
             </div>
             <div className={styles.OneCarb}>
                 <img src="https://static.tildacdn.com/tild6365-3934-4466-b033-353264636330/photo.png" style={{width:"100px",height:"30px"}}/>
                 <p>Cabriolets</p>
             </div>
             <div className={styles.OneCarb}>
                 <img src="https://static.tildacdn.com/tild6661-3932-4439-b539-393530343232/photo.png" style={{width:"100px",height:"30px"}}/>
                 <p>Sport cars</p>
             </div>
             <div className={styles.OneCarb}>
                 <img src="https://static.tildacdn.com/tild3232-3438-4964-b236-666238376139/noroot.png" style={{width:"100px",height:"30px"}}/>
                 <p>Coupe</p>
             </div>
             
            </div>
          <div className={styles.filters}>
              <div className={styles.filters1}>
              <div className="dropdown">
  <button className="dropbtn"><div className={styles.text}>BRAND <i className="arrow down"></i></div></button>
  <div className="dropdown-content">
  <a href="#"><input type="checkbox"  /> <label>Audi</label></a>
    <a href="#"><input type="checkbox"  /> <label>BMW</label></a>
    <a href="#"><input type="checkbox"  /> <label>Bentley</label></a>
    <a href="#"><input type="checkbox"  /> <label>Chevrolet</label></a>
    <a href="#"><input type="checkbox"  /> <label>Ferrari</label></a>
    <a href="#"><input type="checkbox"  /> <label>Ford</label></a>
    <a href="#"><input type="checkbox"  /> <label>Lamborghini</label></a>
    <a href="#"><input type="checkbox"  /> <label>McLaren</label></a>
    <a href="#"><input type="checkbox"  /> <label>Mercedes</label></a>
    <a href="#"><input type="checkbox"  /> <label>Nissan</label></a>
    <a href="#"><input type="checkbox"  /> <label>Porsche</label></a>
    <a href="#"><input type="checkbox"  /> <label>Range Rover</label></a>
    <a href="#"><input type="checkbox"  /> <label>Rolls Royce</label></a>
  
  
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn"><div className={styles.text}>POWER <i className="arrow down"></i></div></button>
  <div className="dropdown-content">

    <a href="#"><input type="checkbox"  /> <label> 300-400</label></a>
    <a href="#"><input type="checkbox"  /> <label>400-500 </label></a>
    <a href="#"><input type="checkbox"  /> <label>500-600</label></a>
    <a href="#"><input type="checkbox"  /> <label>600-700</label></a>
    <a href="#"><input type="checkbox"  /> <label>700-800</label></a>
  
  </div>
</div>  
<div className="dropdown">
  <button className="dropbtn"> <div className={styles.text}>PRICE <i className="arrow down"></i></div></button>
  <div className="dropdown-content">
    <a href="#" style={{display:"flex",flexDirection:"row"}}><input value="20000"/>-<input value="150000"/></a>
  </div>
</div>     
<div className="dropdown">
  <button className="dropbtn">  <div className={styles.text}>COLOR <i className="arrow down"></i></div></button>
  <div className="dropdown-content">
 <a href="#"><input type="checkbox"  /> <label>White</label></a>
    <a href="#"><input type="checkbox"  /> <label>Blue</label></a>
    <a href="#"><input type="checkbox"  /> <label>Yellow</label></a>
    <a href="#"><input type="checkbox"  /> <label>Red</label></a>
    <a href="#"><input type="checkbox"  /> <label>Purple</label></a>
  </div>
</div>                
                 
                 
              </div>
              <div className={styles.filters2}>
              <select name="cars" id="cars">
        <option value="volvo">Sort: newest first
</option>
        <option value="saab">Price: in ascending order</option>
        <option value="opel">Price: in descending order</option>
        <option value="audi">Sort: A—Z</option>
      </select>              </div>
          </div>
          <div className={styles.cars}>
          {tab.map((e)=>{return <Car source={e.source} name={e.name} price={e.price} Passengers={e.Passengers} Luggage={e.Luggage} Doors={e.Doors}/>})}
        
          </div>
          <div className="moreCars">
              <button className="more">More cars</button>
          </div>
          
      
        </div>
    )
}

export default Main
