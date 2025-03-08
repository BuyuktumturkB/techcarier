import React from "react";

const TutorialCard = ({tutorial}) => {
    return (
        <div>
            <h1>{tutorial.title}</h1>
            <p>{tutorial.mentor}</p>
            <img src={tutorial.image} alt="tutorial" />
        </div>
    );
};
export default TutorialCard;