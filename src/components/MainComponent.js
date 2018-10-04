import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetails';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* will map the Redux Store's state into props that will become available to the component */
const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
    // now states are available as props
}


class Main extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter(dish => dish.featured)[0]} 
              promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
              leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        /* Convert url's disId to a base 10 integer value */
        <DishDetail dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
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
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
          {/* dishId is the key */}
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders ={this.props.leaders} />} />
          <Redirect to="/home" /> {/* Anyythin doesn't match other Routers */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

// Connecting the component to the Redux Store
// without withRouter it doesn't work
export default withRouter(connect(mapStateToProps)(Main));
