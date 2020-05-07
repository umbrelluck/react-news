import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            let name = document.getElementsByTagName("input")[0].value;
            document.getElementsByTagName("input")[0].value = "";
            this.props.handleInput(name);   
        }
    }

    render() {
        return (
            <div className="header">
                <NavLink to='/'>
                    <button>Some cool name</button>
                </NavLink>
                <div className="search">
                    <p>Search |</p>
                    <input placeholder="query" onKeyDown={this.handleEnter}></input>
                </div>
            </div>
        )
    }
}
