import React, {Component} from 'react';
import {Modal} from "react-bootstrap";


export default class Cart extends Component{
    constructor(props){
        super(props)
        this.onClose = this.onClose.bind(this); 
        this.addQuantity = this.addQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    //Close the modal
    onClose(e) {
        this.props.onClose && this.props.onClose(e);
    }; 

    //Delete a product from the Cart
    deleteProduct(id){
        this.props.cart.shift(id);
        this.setState({
           cart: this.props.cart.filter(p => p.productId !== id)
        }) 
    }
    
    //Increase quantity
    addQuantity(id){
        let product = this.props.cart.find(product => product.productId === id);
        console.log(product);
        let increaseQuantity = product.productQuantity ++;
            console.log(increaseQuantity);
            this.setState({
                productQuantity: increaseQuantity
            })
        
    } 

    //Decrease quantity
    decreaseQuantity(id){
        let product = this.props.cart.find(q => q.productId === id);
        let decreaseQ = product.productQuantity --;
         this.setState({
            productQuantity: decreaseQ
        })  
    } 


    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div className="container ">
              {this.props.children}
                <Modal dialogClassName='custom-dialog' show={true} size="lg">
                    <Modal.Header>
                        <Modal.Title><h1>Your cart</h1></Modal.Title>
                        <button className="btn closeBtn" onClick={this.onClose}>Close 
                            <i className="fa fa-times" aria-hidden="true" ></i>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="row">
                            <table className="table table-responsive mx-auto">
                                <thead>
                                    <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                            {this.props.cart.map((cartProduct, id) =>
                                <tbody key={cartProduct.productId}>
                                    <tr>
                                    <th scope="row">{cartProduct.productName}</th>
                                    <td className=" mx-auto">
                                        <div className="row mx-auto">
                                            <div className="col-lg-3 qntPlusClass text-center" onClick={() => 
                                                this.decreaseQuantity(cartProduct.productId)}>-</div>
                                            <div className="col-lg-3 inputClass">
                                            <span className="text-center"> {cartProduct.productQuantity} </span>
                                            </div>
                                            <div className="col-lg-3 qntMinusClass text-center" onClick={() => 
                                                this.addQuantity(cartProduct.productId)} >+</div>
                                        </div>
                                    </td>
                                    <td className="text-right">{cartProduct.productPrice}</td>
                                    <td className="text-center"> <i className="fa fa-trash greenColor text-center" aria-hidden="true" onClick={()=> this.deleteProduct(cartProduct)}></i></td>
                                    </tr> 
                                </tbody> 
                            )}
                            </table>    
                            <hr />
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}