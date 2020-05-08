import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

class Header extends React.Component {

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            let name = document.getElementsByTagName("input")[0].value;
            document.getElementsByTagName("input")[0].value = "";
            this.props.handleInput(name);   
            this.props.history.push('/search');
            // {<Redirect to="content"></Redirect>} 
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
