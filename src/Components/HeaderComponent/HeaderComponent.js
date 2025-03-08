import React from "react";
import './HeaderComponent.css'

const HeaderComponent = ({title, description}) =>
    {
        return (
            <div style={{flexDirection:'row', display:'flex'}}>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>

                </div>
                <img style={{height:400, width:400}} alt="computer"
                src="https://www.techcareer.net/assets/images/call-to-actions/pages/quizzes/vector.svg"/>

            </div>
        )

    }
export default HeaderComponent;