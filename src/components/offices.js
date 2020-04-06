
import React from 'react';

function Offices (props){
    return(
        <div>
            <div className='office-s-p'>

                <p className='office-title'>Improve the lives of million. Change yours forever</p>
                <p className='office-p'>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </div>

            
            <div className='slider'>
                {props.office.map(el=><div className='slider-card'>

                    <a href='#'><img className='office-img' src={el.img}></img></a>
                    <p className='office-desc'>{el.title}</p>
                    <div className='btn'>
                    <button className='of-button'>{el.button}</button></div>

                    </div>)}
            </div>
        </div>
    )
}
export default Offices