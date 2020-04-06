import React from 'react'
import '../App.css'


const Lead = props => {
    return (

       
        <div className="lead-section">

      <img src={props.leads[0].src} alt={props.leads} /> 
             <h1>{props.leads[1].h1} </h1>
             <div className="pr">
                     <p>{props.leads[2].p}</p>
                     <p>{props.leads[2].p}</p>
                      
             </div>
         </div>




    )
}


export default Lead ;