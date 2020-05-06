import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <NavLink to='/'>
                    <button>Some cool name</button>
                </NavLink>
                <div className="search">
                    <p>Search |</p>
                    <input placeholder="query"></input>
                    <button></button>
                </div>
            </div>
        )
    }
}
