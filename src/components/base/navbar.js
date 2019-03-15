import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (<ol className="navbar">
            <li className="button" onClick={() => this.props.click('home')}>Home</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.click('newsfeed')}>Newsfeed</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.click('tic-tac-toe')}>Tic-Tac-Toe</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.click('button')}>Staff</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.click('products')}>Products</li>            
        </ol>);
    }
}
 
export default Navbar;