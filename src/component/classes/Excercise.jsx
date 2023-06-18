import React, { useState } from 'react';
import './excercise.css'
import { discover2 } from '../../Data.js';
import { Link } from "react-router-dom";

const Excercise = () => {
    const [apio2, setApio] = useState(discover2);

    return (
      <div className="card-container2">
        {apio2.map((dta) => (
          <div key={dta.title} className="card2">
            <Link to={`/classview/${dta.id}`}>
              <div className='card2img'>
              <img src={dta.cover} alt={dta.title} />
              </div>
           
            <div className="card-body2">
              <h3>{dta.title}</h3>
              <h6>{dta.cover2}</h6>
              <p className='excercisep'>LEARN MORE</p> 
             
            </div>
            </Link>
           
          </div>
        ))}
      </div>
    );
}

export default Excercise