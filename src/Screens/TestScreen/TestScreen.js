import React from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";

const TestScreen = () =>{
    const title='Testler';
    const description='Teknoloji sektörüne özel hazırlanan testler ile teknik yetkinliklerinizi anında ölçün. Güçlü yanlarınızı keşfedin ve gelişim alanlarınızı belirleyin!';
    return(
        <div>
            <HeaderComponent title={title} description={description} />
        </div>
    )
};
export default TestScreen