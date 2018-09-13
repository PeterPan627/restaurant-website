import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetails';
import Header from './Header';
import Footer from './Footer';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }
  
  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* Passing props to the componenet in <Route> */}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
          <Redirect to="/home" /> {/* Anyythin doesn't match other Routers */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
