import React, {Component} from 'react';
import Product from './Product';

export default class Products extends Component{

    render(){
        return(
            <div className="container">
                 
                 <div className="row">
                    {this.props.products.map(product =>
                    <Product key={product.id} image={product.image} name={product.name} price={product.price} addToCart={()=>this.props.addToCart(product.id, product.name, product.price)} />    
                    )} 
                 </div>
            </div>
        )
    }
}