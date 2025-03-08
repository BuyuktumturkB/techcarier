import react,{useState,useEffect} from "react";

const Events =({isVisible,OnClose}) =>
    {
        const [selectedEvent,setSelectedEvent]=null;

        return(
            <div style={{flexDirection:'collumn'}}>
                <Button> Bootcamp</Button>
                <Button> Hackathon</Button>
                <Buton> Hiring Challenge</Buton>

            </div>
        )
    };
export default Events;