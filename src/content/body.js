import React from 'react'
import News from './news';
import Trends from './trends';
import Content from './content'
import Header from './header';
import Error404 from './error404'

import { Switch, Route, Redirect } from 'react-router-dom'


var gl_text = '';

export default class Body extends React.Component {
    constructor() {
        super();
        this.news_entry = '';
        this.state = {
            query: ""
        }
        this.ref = React.createRef();
    }

    handleClick = (n_e) => {
        console.log(n_e)
        this.news_entry = n_e;
        this.render();
    }

    handleInput = (text) => {
        console.log(text)
        gl_text = text;
        console.log("global", gl_text);
        this.setState((state) => ({
            query: text
        }))
    };


    handleNext = (e) => {
        console.log("Next:  NYI")
    }

    handleLast = (e) => {
        console.log("Last:  NYI")
    }


    render() {
        console.log("gl+state", gl_text, this.state.query);
        return (
            (gl_text === this.state.query) && <div>
                <Header handleInput={this.handleInput} />
                <Switch>
                    <Route exact path='/' render={() =>
                        <News url={'/'} handleClick={this.handleClick} handleNext={this.handleNext} handleLast={this.handleLast} />} />
                    <Route exact path='/search' render={() => (
                        <div>
                            <News url={"/search"} ref={this.ref} handleClick={this.handleClick} handleNext={this.handleNext} query={this.state.query} handleLast={this.handleLast} />}/>
                            <Trends handleClick={this.handleClick} />}/>
                        </div>
                    )} />
                    <Route exact path='/content' render={() => (
                        <div>
                            <Content src={this.news_entry.src} alt={this.news_entry.alt} title={this.news_entry.title} description={this.news_entry.description} url={this.news_entry.url} content={this.news_entry.content} />
                            <Trends handleClick={this.handleClick} />}/>
                        </div>
                    )} />
                    <Route to="404" component={Error404} />
                    <Redirect to='404' />
                </Switch>
            </div >
        )
    }

}