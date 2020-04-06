import React from "react";
import '../App.css'




const Navbar = props => {
  return (


    <nav>

        <img src={props.nav[0].src} alt={props.nav} />
        
      <ul className="mainmenu">
        {props.nav.map((element, index) => (
          <div>
            {element.submenu ? (<ul className="dropdown-menu">

                <li>  <a href>  {element.title} </a> </li>

                <ul className="dropdown-content">
               
                  {element.submenu.map((elt, i) => (
                    <li>
               
                      <a href> {elt} </a>
                    </li>
                  ))}
                </ul>
              </ul>
            ) : (
              <li>   <a href>  {element.title} </a> </li>
            )}
          </div>
        ))}
      </ul>



    </nav>
  );
};
export default Navbar;
