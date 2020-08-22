import React from 'react'

const Feat = props => 
  <div className="achievement">
    <i className="material-icons">{props.icon}</i>
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  </div>


export default Feat
