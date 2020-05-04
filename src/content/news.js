import React from 'react'
import NewsEntry from './news_entry'
import PrevNextButton from './prev_next'
import NewsContent from './news_content'

export default class News extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // page: props.page,
            // page: [1, 0, 0],
            default: true,
            index: 0,
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
        // const style = React.StyleSheet.create({ "width": "50%" });
        // console.log(this.props.width);
        var name = this.props.page['main'] ? 'news_m' : 'news_s';
        var news = this.state.news[this.state.index];
        // console.log(news[2]);
        return (
            this.state.default ? <div className={name}>
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