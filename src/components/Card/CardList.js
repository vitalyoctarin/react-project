import React from 'react';
// import Card from "./Card";
import LoadingSpinner from "../LoadingSpinner";
import {Button, Card, Row} from "react-bootstrap";

const CardList = ({data, loading}) => {
    return (
        <>
            <LoadingSpinner loading={loading}/>
            {/*<Row xs={1} md={3} className="g-4">*/}
            {/*    {*/}
            {/*        data.map(item => {*/}
            {/*            return (*/}

            {/*                <Card style={{width: '18rem'}}>*/}
            {/*                    <Card.Img variant="top" src={item.url}/>*/}
            {/*                    <Card.Body>*/}
            {/*                        <Card.Title>Card Title</Card.Title>*/}
            {/*                        <Card.Text>*/}
            {/*                            Some quick example text to build on the card title and make up the*/}
            {/*                            bulk of the card's content.*/}
            {/*                        </Card.Text>*/}
            {/*                        <Button variant="primary">Go somewhere</Button>*/}
            {/*                    </Card.Body>*/}
            {/*                </Card>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</Row>*/}
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (

                    data.map(item => {
                        return (

                            <Card className="m-2" style={{maxWidth:'30%'}}>
                                <Card.Img className="mt-2" src={item.url}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    })

                ))}
            </Row>
        </>
    );
};

export default CardList;