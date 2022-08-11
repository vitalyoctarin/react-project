import React from 'react';
import classes from '../css/Card.css'

const Card = ({children, image}) => {
    return (
        <div className="card">
            <div className="card-header">
                {/*<h1>{children}</h1>*/}
                <img src={image}/>
            </div>
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo
                    mollitia
                    tempore reiciendis, vel, sequi.
                </p>
                <a href="src/components/Card/Card" className="btn">Read more</a>
            </div>
        </div>
    );
};

export default Card;