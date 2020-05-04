import React from 'react'

const NewsEntry = (props) => (
    <div className="NewsEntry_m">
        <img alt={props.alt} src={props.src}></img>
        <p>{props.text}</p>
    </div>
);

export default NewsEntry;