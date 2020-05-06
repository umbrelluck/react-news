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
                src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5eb10238cb95f20007db3cd6%2F0x0.jpg",
                text: "Unmasking The Truth: Insider’s Account Of Sourcing Face Masks From China",
                alt: "Picture"
            },
            {
                src: "https://www.coindesk.com/wp-content/uploads/2020/05/chart-arrows-up-down-1200x628.jpg",
                alt: "Picture",
                text: "Amun Launches Token Tracking the Inverse of Bitcoin’s Price"
            },
            {
                src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5eb27ce3ed706b000616ca92%2F0x0.jpg",
                alt: "Picture",
                text: "Bitcoin Halving In 5 Days, U.S. National Debt To Hit $25 Trillion"
            },
            {
                src: "null",
                alt: "",
                text: "Warren Buffett compares the Depression to current day economy - Yahoo Finance"
            },
            {
                src: "https://dailyfintech.com/wp-content/uploads/2020/05/christiann-koepke-0jPuWm8_9wY-unsplash-1024x683.jpg",
                alt: "Picture",
                text: "Trading Through Turbulent Times: Opportunities For Payments’ Fintechs & Investors"
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
                    <NewsEntry key={id} src={entry.src} alt={entry.alt} text={entry.text} />
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