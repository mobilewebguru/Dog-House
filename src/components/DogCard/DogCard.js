import React from "react";
import "./DogCard.css";

const DogCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectDog(props.breed)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default DogCard;
