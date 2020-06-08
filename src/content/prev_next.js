import React from 'react'

const PrevNextButton = (props) =>(
<button className="PrevNext" onClick={props.clicked}>{props.text}</button>
);

export default PrevNextButton;