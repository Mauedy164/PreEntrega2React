const products = [
    {
      id: '1',
      title: 'Auto Deportivo',
      price: 50000,
      category: 'vehiculos',
      description: 'Auto deportivo de última generación',
      image: '/api/placeholder/400/300'
    },
    {
      id: '2',
      title: 'Laptop Gaming',
      price: 2000,
      category: 'electronica',
      description: 'Laptop para gaming de alto rendimiento',
      image: '/api/placeholder/400/300'
    },
    // Agrega más productos según necesites
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = products.filter(product => product.category === categoryId);
        resolve(filtered);
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(product => product.id === id);
        resolve(product);
      }, 1000);
    });
  };