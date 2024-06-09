import React from "react";
import PropTypes from "prop-types";

const CardBig = (props) => {
    return (
        <div className="container my-5">
            <div className="card text-center bg-light">
                <div className="card-body">
                    <h1 className="card-title"> {props.title} </h1>
                    <p className="card-text">{props.textoContent}</p>
                    <a href="#" className="btn btn-primary">
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </div>
    )
}
CardBig.propTypes = {
    title: PropTypes.string.isRequired,
    textoContent: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default CardBig