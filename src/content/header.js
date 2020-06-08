import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

class Header extends React.Component {

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.handleInput(e.target.value);
            e.target.value='';   
            this.props.history.push('/search');
        }
    }

    render() {
        return (
            <div className="header">
                <NavLink to='/'>
                    <button>Total NEWS</button>
                </NavLink>
                <div className="search">
                    <p>Search |</p>
                    <input placeholder="query" onKeyDown={this.handleEnter}></input>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
