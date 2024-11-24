import { useState } from "react";

export const ComponentCounter = () => {
    // Estado numérico para el contador, iniciado en 0
    const [counter, setCounter] = useState<number>(0)

    // Función para incrementar el contador
    const incrementCounter = () => {
        setCounter((prev) => prev + 1)
    }
    // Función para decrementar el contador (solo si es mayor que 0)
    const decrementCounter = () => {
        if (counter > 0) {
        setCounter((prev) => prev - 1);
        }
    }

    return (
        <div>
            {/* Muestra el valor actual del contador */}
            <h2>valor de counter: {counter}</h2>

            {/* Botones para incrementar y decrementar */}
            <button onClick={incrementCounter}>Incrementar</button>
            <button onClick={decrementCounter}>Decrementar</button>
        </div>
    )
}