import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

// Interfaz para las props del componente
interface IPropsFormProduct {
    handleAddProduct: Function;  // Función para agregar nuevo producto
}

// Componente de formulario para agregar productos
export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    // Uso del hook personalizado useForm para manejar el formulario
    const { handleChange, values, resetForm } = useForm(
        {
            nombre: '',
            imagen: '',
            precio: 0
        }
    )

    // Manejador del envío del formulario
    const handleSubmitForm = () => {
        handleAddProduct(values);  // Agrega el nuevo producto
        resetForm();              // Resetea el formulario
    }

    return (
        // Formulario con estilos de Bootstrap
        <Form className="p-4 border rounded m-3">
            {/* Campo para el nombre del producto */}
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="ingrese nombre producto"
                    value={values.nombre}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Campo para la URL de la imagen */}
            <Form.Group controlId="formNombre">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    placeholder="ingrese imagen del producto"
                    value={values.imagen}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Campo para el precio */}
            <Form.Group controlId="formNombre">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    name="precio"
                    placeholder="ingrese precio del producto"
                    value={values.precio}
                    onChange={handleChange}
                />
            </Form.Group>
            {/* Botón de envío centrado */}
            <div className="d-flex justify-content-center mt-4">
                <Button onClick={handleSubmitForm} variant="primary">
                    Enviar Producto
                </Button>
            </div>
        </Form>
    )
}