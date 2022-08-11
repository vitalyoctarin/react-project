import React from 'react';
import Card from "./Card";

const CardList = ({data}) => {
    return (
        <div className="card-list">
            {
                data.map(item => {
                    return <Card image={item.url}/>
                })
            }


            {/*<Card image="https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg">*/}
            {/*    <h1>Card Max</h1>*/}
            {/*</Card>*/}
            {/*<Card image="https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg">*/}
            {/*    <h1>Card Max</h1>*/}
            {/*</Card>*/}
            {/*<Card image="https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg">*/}
            {/*    <h1>Card Max</h1>*/}
            {/*</Card>*/}
        </div>
    );
};

export default CardList;