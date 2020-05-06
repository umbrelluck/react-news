import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NewsEntry extends React.PureComponent {

    clicked =()=>{
        console.log("here is zopa");
    };

    render() {
        return (
            <NavLink className="nav" exact to="/content">
                <div className="NewsEntry_m" onClick={this.clicked}>
                    <img alt={this.props.alt} src={this.props.src}></img>
                    <p>{this.props.title}</p>
                </div>
            </NavLink>
        )
    }

}