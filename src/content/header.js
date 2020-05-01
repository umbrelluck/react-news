import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <button>Some cool name</button>
                <div className="search">
                    <p>Search |</p>
                    <input placeholder="query"></input>
                    <button></button>
                </div>
            </div>
        )
    }
}
