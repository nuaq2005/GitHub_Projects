import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="card-content">
          <h2 className="name">{props.name}</h2>
          <h3 className="nation">{"Nation: " + props.nation}</h3>
          <p className="vision">{"Vision: " + props.vision}</p>
          <p className="teamposition">{"Team Position: " + props.teamposition}</p>
          <br/>
          <Link to={'/edit/'+ props.id}> Edit </Link>
          <br/>
          <Link to={'/read/'+ props.id}> See Details </Link>
      </div>
  );
};

export default Card;