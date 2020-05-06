import React from 'react'
import NewsEntry from './news_entry'
import PrevNextButton from './prev_next'
import NewsContent from './news_content'

import { Router } from 'react-router-dom'

export default class News extends React.Component {
    constructor(props) {
        super();
        this.state = {
            news: [{
                src: "1",
                alt: "1",
                text: "Text 1"
            },
            {
                src: "2",
                alt: "2",
                text: "Text 2"
            },
            {
                src: "3",
                alt: "3",
                text: "Text 3"
            },
            {
                src: "4",
                alt: "4",
                text: "Text 4"
            },
            {
                src: "5",
                alt: "5",
                text: "Text 5"
            }
            ]
        }
    }

    render() {
        var name = (this.props.url === "/") ? 'news_m' : 'news_s';
        var flag_news_content = (this.props.url === "/content") ? true : false;
        var news = this.state.news[this.state.index];
        console.log(this.props.url);
        return (
            (!flag_news_content) ? <div className={name}>
                {this.state.news.map((entry, id) => (
                    <NewsEntry key={id} src={entry.src} alt={entry.src} text={entry.text} />
                ))}
                <div className="buttons">
                    <PrevNextButton text={"Last"} />
                    <PrevNextButton text={"Next"} />
                </div>
            </div> :
                <div className={name}>
                    <NewsContent src={news.src} title={news.alt} text={news.text} />
                </div>
        )
    }
}