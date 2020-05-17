import React from 'react'
import NewsEntry from './news_entry'
import PrevNextButton from './prev_next'

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.url = (this.props.url === '/')
            ? 'http://newsapi.org/v2/top-headlines?category=general&' +
            'apiKey=3377d076bfef4723bb8c61632da7bc3a'
            : 'http://newsapi.org/v2/everything?q=' + this.props.query + '&' +
            'apiKey=3377d076bfef4723bb8c61632da7bc3a';
        this.state = {
            i: 0,
            news: []
        }

    }
    handleLast = () => {
        console.log("Last");
        this.setState((state) => ({
            i: (state.i - 5 >= 0) ? state.i - 5 : state.i
        }))
        this.arrivalHandle(this.url);

    }
    handleNext = () => {
        console.log("Next");
        this.setState((state) => ({
            i: (state.i + 5 <= state.news.length) ? state.i + 5 : state.i
            // i: state.i + 5
        }))
        this.arrivalHandle(this.url);
    }

    componentDidMount() {
        this.arrivalHandle(this.url);
    }

    arrivalHandle = (url) => {
        console.log(this.state)
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
        return (
            (this.state.news.length !== 0) && <div className={this.props.url === '/' ? 'news_m' : 'news_s'}>
                {this.state.news.map((entry, id) => (
                    <NewsEntry key={id} id={entry.id} src={entry.src} alt={entry.alt} title={entry.title} onClicked={() => this.clicked(id)} />
                ))}
                <div className="buttons">
                    <PrevNextButton text={"Last"} clicked={this.handleLast} />
                    <PrevNextButton text={"Next"} clicked={this.handleNext} />
                    <button onClick={() => { console.log(this.url) }}>mshjsh</button>
                </div>
            </div>
        )
    }
}