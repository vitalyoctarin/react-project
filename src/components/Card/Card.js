import React from 'react';
import '../css/Card.css'

const Card = ({children, image}) => {
    return (
        <div className="card">
            {/*<div className="card-header">*/}
                {/*<h1>{children}</h1>*/}
                <img src={image}/>
            {/*</div>*/}
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo
                    mollitia
                    tempore reiciendis, vel, sequi.
                </p>
                <a href="" className="btn">Подробнее</a>
            </div>
        </div>
    );
};

export default Card;