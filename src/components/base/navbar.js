import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (<ol className="navbar">
            <li className="button" onClick={() => this.props.homeClick()}>Home</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.newsfeedClick()}>Newsfeed</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.ticTacToeClick()}>Tic-Tac-Toe</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.staffClick()}>Staff</li>
            <li className="divider"></li>
            <li className="button" onClick={() => this.props.productsClick()}>Products</li>            
        </ol>);
    }
}
 
export default Navbar;