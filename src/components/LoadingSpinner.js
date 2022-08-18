import React from 'react';
import {CSSTransition} from "react-transition-group";
import "./css/circle-loader.css";

const LoadingSpinner = ({loading}) => {
    return (
        <CSSTransition
            in={loading}
            timeout={200}
            unmountOnExit
            classNames={{
                enter: 'lds-ring-enter',
                enterActive: 'lds-ring-enter-active',
                exit: 'lds-ring-exit',
                exitActive: 'lds-ring-exit-active',
                exitDone: 'lds-ring-exit-done',
            }}
        >
            <div className="modal-loader warning">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </CSSTransition>
    );
};

export default LoadingSpinner;