import React from 'react'

const Stats=props=> {
  return (
    <div>

<section className='stat-section'>
            <div className='left'>
                <p className='stat-title'>The world's <br></br>biggest health care platform</p>
                <p className='stat-p'>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries</p>
                <img src='https://www.docplanner.com/img/logo.png' className="lg"></img>
            </div>


       <div class="right">
               {props.stat.map(el =><div className="items">
               <img src= {el.image}/>
                <h3>{el.title}</h3>
                <p>{el.p}</p> 
                </div>)}

                </div>
                </section>

    </div>
  )
}
export default Stats