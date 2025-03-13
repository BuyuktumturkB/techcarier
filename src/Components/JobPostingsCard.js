import React from "react";
const JobPostingCard = ({image,title,company,location})=>{
    <div style={{flexDirection:'row'}}>
        <img src={image} alt=''/>
        <div>
            <h3>{title}</h3>
            <p> {company}</p>
            <p> {location}</p>
        </div>
    </div>
}
export default JobPostingCard;