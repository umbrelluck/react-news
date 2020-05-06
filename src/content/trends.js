import React from 'react'
import NewsEntry from './news_entry'
import {NavLink} from 'react-router-dom'

export default class Trends extends React.Component {
    constructor(props) {
        super();
        this.state = {
            news: [{
                src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5eb10238cb95f20007db3cd6%2F0x0.jpg",
                title: "Unmasking The Truth: Insider’s Account Of Sourcing Face Masks From China",
                alt: "Picture"
            },
            {
                src: "https://www.coindesk.com/wp-content/uploads/2020/05/chart-arrows-up-down-1200x628.jpg",
                alt: "Picture",
                title: "Amun Launches Token Tracking the Inverse of Bitcoin’s Price"
            },
            {
                src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5eb27ce3ed706b000616ca92%2F0x0.jpg",
                alt: "Picture",
                title: "Bitcoin Halving In 5 Days, U.S. National Debt To Hit $25 Trillion"
            },
            {
                src: "null",
                alt: "",
                title: "Warren Buffett compares the Depression to current day economy - Yahoo Finance"
            },
            {
                src: "https://dailyfintech.com/wp-content/uploads/2020/05/christiann-koepke-0jPuWm8_9wY-unsplash-1024x683.jpg",
                alt: "Picture",
                title: "Trading Through Turbulent Times: Opportunities For Payments’ Fintechs & Investors"
            }
            ]
        }
    }
    render() {
        return (
            <div className="trends">
                <p>Trending</p>
                {this.state.news.map((entry, id) => (
                    <NewsEntry key={id} src={entry.src} alt={entry.alt} title={entry.title} />
                ))}
            </div>
        )
    }
}