import React from 'react'

const NewsContent = (props) => (
    <div className="NewsContent">
        <img alt={props.title} src={props.src}></img>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>

);
export default NewsContent;