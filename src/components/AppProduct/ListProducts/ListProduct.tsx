import { FC } from "react";
import { Card } from "react-bootstrap";

// Interfaz para la estructura de un producto
interface ItemProduct {
    precio: number;
    imagen: string;
    nombre: string;
}

// Interfaz para las props del componente
interface IPropsListProducts {
    arrItems: ItemProduct[];  // Array de productos a mostrar
}

// Componente que muestra una lista de productos en forma de cards
export const ListProducts: FC<IPropsListProducts> = ({ arrItems }) => {
    return (
        // Contenedor con grid de 2 columnas y estilos de espaciado
        <div
            className="p-1 m-3 border rounded d-grid gap-2"
            style={{
                gridTemplateColumns: "repeat(2, 1fr)",
                justifyItems: "center",
                alignItems: "center",
            }}
        >
            {/* Mapeo del array de productos para crear cards individuales */}
            {arrItems.map((el, i) => (
                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.imagen} />
                    <Card.Body>
                        <Card.Title>{el.nombre}</Card.Title>
                        <Card.Text>${el.precio}</Card.Text>
                    </Card.Body> 
                </Card>
            ))}
        </div>
    )
}