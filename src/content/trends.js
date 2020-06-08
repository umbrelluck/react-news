import React from 'react'
import NewsEntry from './news_entry'

export default class Trends extends React.Component {
    constructor(props) {
        super();
        this.state = { i: 0, news: [] }
    }

    componentDidMount() {
        this.arrivalHandle();
    }

    arrivalHandle = () => {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'category=general&' +
            'apiKey=3377d076bfef4723bb8c61632da7bc3a';
        fetch(url).then(response => (
            response.json()
        )).then(body => {
            this.setState(state => ({
                news: body.articles.splice(state.i, state.i + 5)
            }))
        });
    }

    clicked = (id) => {
        this.props.handleClick(this.state.news[id]);
    }

    render() {
        console.log("render ",this.state.news.length);
        return (
            (this.state.news.length !== 0) && <div className="trends">
                <p>Trending</p>
                {
                    this.state.news.map((entry, id) => (
                        <NewsEntry key={id} id={entry.id} src={entry.src} alt={entry.alt} title={entry.title} onClicked={()=>this.clicked(id)} />
                    ))}
            </div>
        )
    }
}