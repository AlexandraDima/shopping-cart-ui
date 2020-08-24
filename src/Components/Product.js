import React, {Component} from 'react';

export default class Product extends Component{
    render(){
        return(
                <div className="card col-lg-4k p-0 m-2 mx-auto shadowContainer" id={this.props.id}>
                     <img className="card-img-top" src={this.props.image} alt="product" />
                     <div className="card-body text-center">
                         <h5 className="card-title">{this.props.name}</h5>
                         <h6 className="card-title">{this.props.price.toFixed(2)} kr</h6>
                          <button className="btn addBtn" onClick={() => this.props.addToCart(this.props.id, this.props.name, this.props.price)}>Add</button>
                     </div>
                </div>        
              
        )
    }
}