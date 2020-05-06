import React from 'react'

const NewsContent = ({ title, src, alt, url, content, description }) => (
    <div className="NewsContent">
        <img alt={alt} src={src}></img>
        <div className="title">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div>
            <p className="content">{content}</p>
            <p className="url">More can be found <a href={url}>here</a>.</p>
        </div>
    </div>

);
export default NewsContent;