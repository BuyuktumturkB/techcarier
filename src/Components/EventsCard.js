import { Button } from "@mui/material";
import React from "react";

const EventsCard=({title,deathTime,description,imageUrl})=>{
   
   return(
    <div style={{borderRadius:0,borderWidth:'1px', width:'30%',borderStyle:'solid',margin:'10px',
     borderColor:'gray', justifyContent:'center', alignItems:'center'}}>
        <img src={imageUrl} style={{width:'99%',justifyContent:'center',alignItems:'center'}} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div style={{flexDirection:'row',display:'flex', justifyContent:'space-around'}}>
        <p> Son Tarih: {deathTime}</p>
        <Button style={{backgroundColor:" #47c26d", width:100, height:45}}> 
         <p style={{color:'white'}}> Başvur</p> </Button>
        </div>
        
    </div>
   )

};
export default EventsCard
