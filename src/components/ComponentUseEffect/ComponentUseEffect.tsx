import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {
    // Estado booleano con valor inicial false
    const [state, setState] = useState(false);

    // useEffect que se ejecuta solo al montar el componente
    useEffect(() => {
        console.log("Componente Montado"); 
        // Función de limpieza que se ejecuta al desmontar
        return () => {
            console.log("Componente desmontado")
        }
    }, []);

    // useEffect que se ejecuta cada vez que cambia state
    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <div>
            {/* Renderizado condicional basado en state */}
            <p>{state ? "Es true" : "Es false"}</p>
            {/* Botón para alternar el estado */}
            <button onClick={() => {
                setState(!state);
            }}
            >
                cambiar state
            </button>
        </div>
    );
};