import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            //React Fragment
            <React.Fragment>
                {/* expand=md is show navbar items for medium, large and extra large screens */}
                <Navbar dark expand="md">
                    <div className="container">
                        {/* Hamburger menu icon and functionality */}
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Fusion"></img>
                        </NavbarBrand>
                        <Nav navbar>
                        {/* For responsive design */}
                        {/* isOpen === false, everything inside the collapse will be hidden */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        {/* Navbar items/links */}
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
                            </NavItem>
                            </Collapse>
                        </Nav>                      
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                              <h1>ConFusion</h1>
                              <p>We take inspiration from the World's best cusines and
                                create a uniquee fusion experience. Our lipsmacking creations will tickle your
                                culinary senses!
                              </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }

}

export default Header