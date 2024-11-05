import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


const Card = (props) =>  {
  const cardClass = `card card-${props.vision}`;

  return (
      <div className= {cardClass} >
          <h2 className="name">{props.name}</h2>
          <h3 className="nation">{"Nation: " + props.nation}</h3>
          <p className="vision">{"Vision: " + props.vision}</p>
          <p className="teamposition">{"Team Position: " + props.teamposition}</p>
          <br/>
          <Link to={'/edit/'+ props.id} className='cardBtn'> Edit </Link>
          <br/>
          <Link to={'/read/'+ props.id} className='cardBtn'> See Details </Link>
      </div>
  );
};

export default Card;