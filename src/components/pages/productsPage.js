import React, { Component } from 'react';

function Product(props) {
    return (<div className="product">
        <div className="product-header">
            <h4 className="name inline">{props.name}</h4>
            <h4 className="price inline">{props.price}</h4>
        </div>
        <p className="description">test test test test test test</p>
        <img className="image" src={props.image}/>
    </div>)
}

class ProductsPage extends Component {
    state = {  }
    render() { 
        return (<div id="productsPage">
            <div id="products">
                <Product name="Product" price="£9.99" image="https://multimonitorcomputer.com/images/builds/3-monitor-computer-cheap-800px.jpg" />
                <Product name="Product" price="£9.99" image="https://multimonitorcomputer.com/images/builds/3-monitor-computer-cheap-800px.jpg" />
                <Product name="Product" price="£9.99" image="https://multimonitorcomputer.com/images/builds/3-monitor-computer-cheap-800px.jpg" />
                <Product name="Product" price="£9.99" image="https://multimonitorcomputer.com/images/builds/3-monitor-computer-cheap-800px.jpg" />
            </div>
        </div>);
    }
}
 
export default ProductsPage;