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
        description: 'El Mazda 3 combina un diseño atractivo con una tecnología de vanguardia. Su motor Skyactiv-G ofrece un equilibrio perfecto entre rendimiento y eficiencia en el consumo de combustible. Además, cuenta con un sistema de infoentretenimiento intuitivo y una amplia gama de sistemas de seguridad activa que te brindarán tranquilidad en cada viaje.',
        image: '/public/MAzda.png'
      },
      '2': {
        id: '2',
        title: 'iPhone 16',
        price: 16000,
        category: 'electronica',
        description: 'Equipado con el chip A18 Bionic más rápido hasta la fecha, el iPhone 16 ofrece un rendimiento fluido y eficiente para todas tus tareas. Su pantalla Super Retina XDR ofrece colores vibrantes y negros profundos, mientras que el sistema de cámaras de triple lente captura fotos y videos de calidad profesional. Con conectividad 5G ultrarrápida, resistencia al agua y una amplia gama de accesorios, el iPhone 16 es la elección ideal para los usuarios más exigentes.',
        image: '/public/Smartphone.jpg'
      },
      '3': {
        id: '3',
        title: 'Lavadora Mabe',
        price: 6750,
        category: 'hogar',
        description: 'Lavadora Mabe de 22kg con centrifugado exprees',
        image: '/public/Lavadora.webp'
      },
      '4': {
        id: '4',
        title: 'Samsung Galaxy Z Flip 6 256 Gb 8 Gb Silver',
        price: 19999,
        category: 'electronica',
        description: 'Almacenamiento/Memoria 12RAM Almacenamiento (GB) 256, Galaxy Z Flip6 y su nuevo diseño más fino pasa a ser nuestro smartphone más compacto., ¿Te cuestan las traducciones? Galaxy Z Flip6 es tu pasaporte para hacerte entender en cualquier idioma: ¡será tu traductor personal! Captura fotos increíbles durante el día, ¡pero también de noche! E incluso en zonas con poca luz. Además, puedes usar Nightography y asegurarte de que cada foto brilla gracias a ProVisual Engine, La cámara trasera angular de 50 MP procesa tus fotografías a través de ProVisual Engine para capturar escenas impresionantes y conseguir los mejores retratoscon la cámara trasera.Utiliza FlexWindow para obtener una vista previa de los protagonistas de tus fotos y consigue resultados increíbles gracias a los 50 MP de la cámara. Incluso aunque esté a contraluz.Descubre nuestra batería más duradera para Galaxy Z Flip. Con ella y su procesador Snapdragon® 8 Gen 3 puedes hablar, escribir textos o jugar con tranquilidad todo el díaResistente. Creado para durar',
        image: '/public/samsung.webp'
      },
      '5': {
        id: '5',
        title: 'Motocicleta eléctrica Aima Sweety Plus 2023',
        price: 12399,
        category: 'vehiculos',
        description: 'Motocicleta eléctrica con 120km de rendimiento por carga. Carga completa en 8 horas. Incluye cargador y casco',
        image: '/public/moto.webp'
      },
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
          <div className="md:flex-shrink-0 md:w-1/2 p-4"> {/* Añadido padding y ajustado el ancho */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain max-h-96" // Modificado para mejor adaptación
            />
          </div>
          <div className="p-8 md:w-1/2"> {/* Ajustado el ancho */}
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