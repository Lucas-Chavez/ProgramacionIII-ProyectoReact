import { Container, Navbar } from "react-bootstrap"

// Componente de encabezado que utiliza componentes de React Bootstrap
export const Header = () => {
    return (
        // Barra de navegación con estilo claro
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Carga de Productos</Navbar.Brand>
            </Container>
        </Navbar>
    )
}