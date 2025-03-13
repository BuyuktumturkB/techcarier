import def from "ajv/dist/vocabularies/discriminator";
import React from "react";

const TestCard=({title,description,image})=>
    {
        return(
            <div>
                <img src={image}/>
                <h2> {title}</h2>
            </div>
        )
    }
    export default TestCard;