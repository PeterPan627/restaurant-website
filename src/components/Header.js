import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            //React Fragment
            <React.Fragment>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Confusion Restaurant</NavbarBrand>
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