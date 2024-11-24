// Importamos el tipo FC (FunctionComponent) de React
import {FC} from "react";

// Definimos la interfaz para las props del componente
interface iPropsMyFirstComponent {
    text: string;        // Texto a mostrar (requerido)
    color?: string;      // Color del texto (opcional)
    fontSize: number;    // Tamaño de fuente en rem (requerido)
}

// Componente funcional que recibe props tipadas y muestra texto estilizado
export const MyFirstComponent: FC<iPropsMyFirstComponent> = ({
    text,
    color,
    fontSize,
}) => {
    return (
        // Contenedor con estilos inline para el color y tamaño de fuente
        <div style={{ color: color, fontSize: `${fontSize || 1}rem` }}>
            <p>{text}</p>
        </div>
    );
};