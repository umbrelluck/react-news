import React from 'react'
import NewsEntry from './news_entry'

export default class Trends extends React.Component {
    constructor(props) {
        super();
        this.state = {
            news: [{
                src: "1",
                alt: "1",
                text: "Text trending 1"
            },
            {
                src: "2",
                alt: "2",
                text: "Text trending 2"
            },
            {
                src: "3",
                alt: "3",
                text: "Text trending 3"
            },
            {
                src: "4",
                alt: "4",
                text: "Text trending 4"
            },
            {
                src: "5",
                alt: "5",
                text: "Text trending 5"
            }
            ]
        }
    }
    render() {
        return (
            //(!this.props.page['main']) && 
            <div className="trends">
                <p>Trending</p>
                {this.state.news.map((entry, id) => (
                    <NewsEntry key={id} src={entry.src} alt={entry.src} text={entry.text} />
                ))}
            </div>
        )
    }
}