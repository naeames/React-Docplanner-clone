
import React from 'react';

function Brands (props) {
    return (
        
          
          <div className="brand">

         <h2> {props.br[0].h2}</h2>


         <div className="logos"> 
         {props.br[1].src}
         {props.br[2].src}
         {props.br[3].src}
         {props.br[4].src}
         {props.br[5].src}
         </div>
    
         </div>



          
     
    )
}
export default Brands 