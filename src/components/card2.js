
import React from 'react';

function Main2 (props){
    return (
        <div className='main-section'>

            <div className="card2">   
            {props.main2.map((el)=>
            <div className='card2' >
                <p className='main-title'>{el.title}</p>
                <p className='main-p'>{el.h3}</p>
              <img className='image img2' src={el.src}></img>
            </div>
            )}
</div>


 </div>
    )
  }
  export default Main2