import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NewsEntry extends React.PureComponent {

    constructor(props) {
        super();
        this.id = props.id;
    }

    getId = () => {
        return this.id
    };

    // clickHandle = () => {
    //     this.props.onClicked(this.getId());
    // }

    render() {
        return (
            <NavLink className="nav" exact to="/content">
            <div className="NewsEntry_m" onClick={() => this.props.onClicked(this.getId())}>
                    <img alt={this.props.alt} src={this.props.src}></img>
                    <p>{this.props.title}</p>
                </div>
            </NavLink>
        )
    }

}