import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
  
    const mockProducts = {
      '1': {
        id: '1',
        title: 'Auto Deportivo',
        price: 540000,
        category: 'vehiculos',
        description: 'Un increíble auto deportivo con grandes prestaciones.',
        image: '/public/MAzda.png'
      },
      '2': {
        id: '2',
        title: 'iPhone 16',
        price: 16000,
        category: 'electronica',
        description: 'Smartphone de última generación con cámara de alta resolución.',
        image: '/public/Smartphone.jpg'
      }
    };

    
    setProduct(mockProducts[id]);
  }, [id]);

  if (!product) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 w-full object-cover md:w-96"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-blue-600 text-2xl font-bold mt-4">
              ${product.price.toLocaleString()}
            </p>
            <p className="mt-4 text-gray-600">
              {product.description}
            </p>
            <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;