// Importamos el hook personalizado useForm
import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
    // Inicializamos el formulario con valores iniciales usando useForm
    const { values, handleChange, resetForm } = useForm({
        email: '',
        nombre: '',
        edad: 0
    })
    // Desestructuramos los valores del formulario
    const { email, nombre, edad } = values;

    // Manejador para el envío del formulario
    const handleSubmitForm = () => {
        console.log(values)
    }
    // Manejador para resetear el formulario
    const handleResetForm = () => {
        resetForm();
    }

    return (
        <div>
            <div>
                <h2>Formulario</h2>
            </div>
            {/* Contenedor de inputs con estilos flex column */}
            <div style={{ display: "flex", flexDirection: "column", gap: '2vh' }}>
                {/* Input para email */}
                <input
                    value={email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="example@example.com"
                />

                {/* Input para nombre */}
                <input
                    value={nombre}
                    name="nombre"
                    onChange={handleChange}
                    type="text"
                    placeholder="nombre"
                />

                {/* Input para edad */}
                <input
                    value={edad}
                    name="edad"
                    onChange={handleChange}
                    type="number"
                    placeholder="edad"
                />
            </div>
            {/* Botones de acción */}
            <div>
                <button onClick={handleSubmitForm}>Enviar</button>
                <button onClick={handleResetForm}>Resetear</button>
            </div>
        </div>
    )
}