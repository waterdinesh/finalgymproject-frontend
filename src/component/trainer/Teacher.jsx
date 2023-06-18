import React, { useState } from 'react';
import '../trainer/teacher.css';
import { discover } from '../../Data.js';
import { Link } from "react-router-dom";

const Teacher = () => {
  const [apio, setApio] = useState(discover);

  return (
    <div className="card-container">
      {apio.map((dta) => {
        return (
          <div key={dta.title} className="card">
            <Link to={`/teacherview/${dta.id}`}> {/* Fix: Use dta.id instead of apio.id */}
            <div className='cardimg'>
            <img src={dta.cover} alt={dta.title} />
            </div>
             
              <div className="card-body">
                <h3>{dta.title}</h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Teacher;

