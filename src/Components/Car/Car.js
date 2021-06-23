import React from 'react'
import style from "./Car.module.css"


const Car = ({source,name,price,Passengers,Luggage,Doors }) => {
    return (
        <div className={style.cars}>
            <img src={source} className={style.car}/>
            <div className={style.baboucha}>
                <div>
            <h3 style={{color:"#FF2D55" ,padding:"20px 0 15px 0"}}>{name}</h3>
        
            <ul className={style.Details_Car}>
              
               <li> <img src="https://www.docplanner.com/icons/icon-doctors.svg"/><p style={{color:"#FF2D55",padding:"10px"}}>{Passengers}</p></li>
               <li> <img src="https://icon-library.com/images/white-shopping-bag-icon/white-shopping-bag-icon-4.jpg" style={{width:"20px"}}/><p style={{color:"#FF2D55",padding:"10px"}}>{Luggage}</p></li>
               <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyF6RwTtnb3hDnl3L06XyWgoqF8Vg_ZNx_vQ&usqp=CAU" style={{width:"22px"}}/><p style={{color:"#FF2D55",padding:"10px"}}>{Doors}</p></li>
           </ul>
           </div>
            <div className={style.carPrice}> <p style={{color:"#FF2D55",padding:"10px",fontSize:"34px",fontWeight:"500"}}>{price}</p>
            <div style={{fontSize:"15px"}}>
                <p>AED</p>
                <p style={{width:"50px"}}>Per day</p>
                </div>
                </div>
            
            
            
            </div>
        </div>
    )
}

export default Car
