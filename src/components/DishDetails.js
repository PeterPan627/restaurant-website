import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


   function RenderDish({dish}) {
        if (dish) {
            return (
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

   function RenderComments({comments}) {
       return comments.map(comment => {
                return(
                <ul className="list-unstyled">
                <li key={comment.id} >
                    <p>{comment.comment}</p>
                    <p>{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'})
                    .format(new Date(Date.parse(comment.date)))}</p>
                </li>
                </ul>
                )

        })
    }

   const DishDetail = (props) => {
        const selected = props.dish;
        return (
            <div className="container">
                {selected &&                 
                        <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                        </div>
                        </div>
                }

            </div>
        )

    }

export default DishDetail


