import { useState } from 'react';
import { Header } from './Header/Header';
import { FormProduct } from './FormProduct/FormProduct';
import { ListProducts } from './ListProducts/ListProduct';

// Interfaz que define la estructura de un producto
interface ItemProduct {
    precio: number;   // Precio del producto
    imagen: string;   // URL de la imagen del producto
    nombre: string;   // Nombre del producto
}

export const AppProduct = () =>{
    // Estado para almacenar el array de productos
    const [products,setProducts] = useState<ItemProduct[]>([]);
    
    // Función para agregar un nuevo producto al array
    const handleAddProduct = (newItem: ItemProduct)=>{
        setProducts((prev)=>[...prev, newItem]);
    }

    return(
        <div>
            <Header/>
            <h2 className="text-center">Formulario</h2>
            {/* Componente de formulario que recibe la función para agregar productos */}
            <FormProduct handleAddProduct={handleAddProduct}/>
            <h2 className="text-center">Productos</h2>
            {/* Renderizado condicional: muestra la lista de productos o un mensaje si no hay productos */}
            {products.length > 0 ? (
                <ListProducts arrItems={products}/>
            ) : (
            <h3 className="text-center">No hay productos</h3>
            )}
        </div>
    )
}