import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "fontawesome-4.7/css/font-awesome.min.css";
import Cart from './Components/Cart';
import Products from './Components/Products';
import Cargo_Train from './Images/Cargo_Train.png'; 
import Tower_Crane_Construction from './Images/Tower_Crane_Construction.png';
import Wrecking_Ball_Demolition from './Images/Wrecking_Ball_Demolition.png';
import Creative_animals from './Images/Creative_animals.png';
import Modular_Playhouse from './Images/Modular_Playhouse.png';
import World_Animals from './Images/World_Animals.png';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.state = {
        products:[
            {
                id:1,
                name: "Tower Crane & Construction",
                image: Tower_Crane_Construction,
                price: 1099.00
            },
            {
                id:2,
                name: "Wrecking Ball Demolition",
                image: Wrecking_Ball_Demolition,
                price: 549.00,
            },
            {
                id:3,
                name: "Cargo Train",
                image: Cargo_Train,
                price: 1099.00
            },
             {
                id:4,
                name: "Creative Animals",
                image: Creative_animals,
                price: 549.00
            },
            {
                id:5,
                name: "Modular Playhouse",
                image: Modular_Playhouse,
                price: 549.00
            },
            {
                id:6,
                name: "World Animals",
                image: World_Animals,
                price: 899.00
            }
        ], 
        cart:[],
        show: false
    }
  }

    //Add products to the Cart list
    addToCart(id, name, price){
      var quantity = 1;
      //Check if the product is already in the cart
      let productId = this.state.cart.find(p => p.productId === id);
      if(productId == null){
        this.state.cart.push(
          {
            productId: id,
            productName: name,
            productPrice: price,
            productQuantity: quantity 
          }
        );  
      }  else{
        productId.productQuantity += quantity;
      }  
      
      //Update the state of the Cart list
      console.log(this.state.cart);
      this.setState({
      cart:this.state.cart
      })    
    }  

    //Calculate the total quantity
    countCartProduct(){
      let result = this.state.cart.reduce((total,cartP) => total + cartP.productQuantity, 0);
      return result
    }
  
    //Show the cart modal
    showModal () {
      this.setState({
      show:  !this.state.show
      });
    };

  render(){
    return (
      <div className="container mt-4">
        <header>
          <div className="d-flex flex-row-reverse mb-4">
            <span className="fa-stack fa-2x has-badge " data-count={this.countCartProduct()} onClick={e => {
                  this.showModal();}}>
            <i className="fa fa-circle greenColor fa-stack-2x"></i>
            <i className="fa fa-shopping-cart whiteColor fa-stack-1x blue-cart"></i>
            </span>
          </div>
          <Cart cart={this.state.cart} products={this.state.products} onClose={this.showModal} show={this.state.show} /> 
        </header>

        <Products products={this.state.products} addToCart={(id, name, price)=>this.addToCart(id, name, price)} /> 
      
      </div>
    );
  }
}


