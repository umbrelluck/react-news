import React from 'react'
import NewsContent from './news_content'

const Content=(props)=>(
    <div className="news_s">
        <NewsContent src={props.src} alt={props.alt} title={props.title} description={props.description} url={props.url} content={props.content} />
    </div>
);

export default Content;