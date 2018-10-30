
import './Navtop.scss';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Navtop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navtop">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/score">Score</Link></li>
                    <li><Link to="/income">Income</Link></li>
                    <li><Link to="/expenses">Expenses</Link></li>
                    <li><Link to="/transfer">Transfer</Link></li>
                </ul>
            </nav>

        );
    }
}

export default Navtop;