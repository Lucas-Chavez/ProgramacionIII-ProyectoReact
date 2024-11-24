// import { useState } from "react";
// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
// import { MyFirstComponent } from './components/MyFirstComponent/MyFirstComponent'
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
// import { FormComponent } from "./components/FormComponent/FormComponent";

import { AppProduct } from "./components/AppProduct/AppProduct";


export const App = () => {

    //const [enableCounter, setEnableCounter] = useState(false) 

    return (


    <div style={{display:'flex', flexDirection:'column', gap: "2vh"}}>
        {/*
            <MyFirstComponent text={"Texto desde propiedades"} color={"red"} fontSize={5}/>
            <MyFirstComponent text={"Texto desde propiedades numero 2"} fontSize={3}/>
            {
                enableCounter && <ComponentCounter/>
            }

            <button onClick={()=>{
                setEnableCounter(!enableCounter)
            }}>Mostrar u ocultar Counter</button>
            <ComponentUseEffect/>
            <FormComponent/>
        */}
        <AppProduct/>
    </div>
    );
};