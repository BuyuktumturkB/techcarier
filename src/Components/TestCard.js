
import React from "react";

const TestCard=({title,description,image,level,time,quantity})=>
    {
        return(
            <div style={{borderWidth:'10px', borderColor:'black'}}>
                <img style={{width:'70%'}} src={image} alt=" "/>
                <h2> {title}</h2>
                <p>{description}</p>
                <div style={{flexDirection:'row', display:'flex', justifyContent:'space-between'}}>
                    <p>{level}</p>
                    <p>{time} dakika</p>
                    <p>{quantity} soru </p>

                </div>
            </div>

        )
    }
    export default TestCard;
