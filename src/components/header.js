import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="header">
                <Link to="/home"><h1 className="logo-header">ECommerce</h1></Link>
            </div>
        )
    }
}

export default Header
