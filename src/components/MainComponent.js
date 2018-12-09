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
import  { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

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

//addCommnet action creator and fetchDishes thunk wll be available in the main component
const mapDispatchToProps = dispatch => ({
  // The object that is returned from addComment action creator will be given as a parameter to dispatch
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
})

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]} 
              dishesLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        /* Convert url's disId to a base 10 integer value */
        <DishDetail dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
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
          <Route exact path="/contactus" component={() => <Contact setFeedbackForm={this.props.resetFeedbackForm} />} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
