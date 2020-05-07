import React from 'react'
import News from './news';
import Trends from './trends';
import Content from './content'
import Header from './header';
import Error404 from './error404'

import { Switch, Route, Redirect } from 'react-router-dom'


var news_entry = {
    id: 5,
    src: "https://dailyfintech.com/wp-content/uploads/2020/05/christiann-koepke-0jPuWm8_9wY-unsplash-1024x683.jpg",
    alt: "Picture",
    title: "Trading Through Turbulent Times: Opportunities For Payments’ Fintechs & Investors",
    description: "Jessica Ellerm is a thought leader specializing in Small Business and the Gig Economy and is the CEO and Co- Founder of Zuper, a neowealth disruptor in Australia For many fintech companies and new financial technologies(hello Bitcoin), COVID - 19 is proving to …",
    url: "https://dailyfintech.com/2020/05/06/trading-through-turbulent-times-opportunities-for-payments-fintechs-investors/",
    content: "Jessica Ellerm is a thought leader specializing in Small Business and the Gig Economy and is the CEO and Co-Founder of Zuper, a neowealth disruptor in Australia\r\nFor many fintech companies and new financial technologies (hello Bitcoin), COVID-19 is proving to… [+2649 chars]"
};

export default class Body extends React.Component {

    handleClick = (n_e) => {
        news_entry = n_e;
    }

    handleInput = (text) => {
        console.log(text)
    };

    render() {
        return (
            <div>   
                <Header handleInput={this.handleInput} />
                <Switch>
                    <Route exact path='/' render={() =>
                        <News url={'/'} handleClick={this.handleClick} />} />
                    <Route exact path='/search' render={() => (
                        <div>
                            <News url={"/search"} handleClick={this.handleClick} />}/>
                            <Trends handleClick={this.handleClick} />}/>
                        </div>
                    )} />
                    <Route exact path='/content' render={() => (
                        <div>
                            <Content src={news_entry.src} alt={news_entry.alt} title={news_entry.title} description={news_entry.description} url={news_entry.url} content={news_entry.content} />
                            <Trends handleClick={this.handleClick} />}/>
                        </div>
                    )} />
                    <Route to ="404" component={Error404}/>
                    <Redirect to='404'/>
                </Switch>
            </div >
        )
    }

}