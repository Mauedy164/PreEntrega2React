import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    
    const mockProducts = [
      {
        id: '1',
        title: 'Mazda 3',
        price: 540000,
        category: 'vehiculos',
        image: '/public/MAzda.png'
      },
      {
        id: '2',
        title: 'iPhone 16',
        price: 16000,
        category: 'electronica',
        image: '/public/Smartphone.jpg'
      },
    ];

    const filtered = id 
      ? mockProducts.filter(product => product.category === id)
      : mockProducts;

    setProducts(filtered);
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {id ? `Categoría: ${id}` : 'Todos los productos'}
      </h2>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
