import { ChangeEvent, useState } from "react";

// Interfaz genérica para los valores del formulario
interface FormValues{
    [key:string]:string | number;  // Permite valores string o number
}

// Hook personalizado que acepta un tipo genérico que extiende de FormValues
export const useForm =<T extends FormValues> 
(initialValues: T) => {
    // Estado para los valores del formulario
    const [values,setValues]= useState<T>(initialValues);

    // Manejador de cambios para inputs
    const handleChange = (event: 
    ChangeEvent<HTMLInputElement>)=>{
        const {value, name} = event.target;
        setValues({...values, [`${name}`]: value});
    };

    // Función para resetear el formulario a sus valores iniciales
    const resetForm =() =>{
        setValues(initialValues);
    };

    // Retorna valores y funciones necesarias para el formulario
    return{
        values,
        handleChange,
        resetForm,
    };
};