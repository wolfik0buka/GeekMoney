import './Header.scss';

import React, { PureComponent } from 'react';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <h1>Hello GeekMoney!</h1>
        );
    }
}

export default Header;