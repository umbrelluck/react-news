import React from 'react'
import News from './news';
import Trends from './trends';
import Content from './content'

import { Switch, Route } from 'react-router-dom'


var news_entry;
export default class Body extends React.Component {

    handleClick = (n_e) => {
        news_entry = n_e
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={() =>
                    <News handleClick={this.handleClick}/>} />
                <Route exact path='/search' render={() => (
                    <div>
                        <News handleClick={this.handleClick} />}/>
                        <Trends handleClick={this.handleClick} />}/>
                    </div>
                )} />
                <Route exact path='/content' render={() => (
                    <div>
                        <Content src={news_entry.src} alt={news_entry.alt} title={news_entry.title} description={news_entry.description} url={news_entry.url} content={news_entry.content} />
                        <Trends handleClick={this.handleClick} />}/>
                    </div>
                )} />
            </Switch>
        )
    }

}