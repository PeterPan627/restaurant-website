import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './Loading';
import { baseURL } from '../shared/baseURL';

function RenderCard({item, isLoading, error}) {
    if (isLoading) {
        return(
            <Loading />
        )
    } else if (error) {
        return(
            <h5>{error}</h5>
        )
    }
    else if(item) {
    return(
        /* This structure can be used for dish, leader and promotion */
        <Card>
            <CardImg src={baseURL + item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {/* item.designation exists only for the leader */}
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>

    );
 } else {
    return <div>sadasd</div>
 }
}

function Home(props){
    return(
        <div className="container">
           <div className="row  align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        error={props.error} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} 
                     isLoading={props.promosLoading}
                     error={props.error}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
           </div>
        </div>
    );
}

export default Home;