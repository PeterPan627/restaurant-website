import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetails';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  
  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter(dish => dish.featured)[0]} 
              promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
              leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          {/* Simply call the component that doesn't need any props */}
          <Route path="/home" component={HomePage} />
          {/* Passing props to the componenet in <Route> */}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" /> {/* Anyythin doesn't match other Routers */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
