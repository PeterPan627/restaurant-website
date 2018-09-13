import React, { Component } from 'react';
import Menu from './Menu';
import DishDetail from './DishDetails';
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  
  //We're only going to trackt the dishId, not the entire dish
  onDishSelect(dishId){
    this.setState({selectedDish: dishId})
}

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes}
              onClick={(dishId)=>this.onDishSelect(dishId)} />
              {/* filter returns an array */}
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish )[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
