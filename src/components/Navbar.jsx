import { Link } from 'react-router-dom';

function Navbar() {
  const categories = [
    { id: 'vehiculos', name: 'Vehículos' },
    { id: 'electronica', name: 'Electrónica' },
    { id: 'hogar', name: 'Hogar' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-blue-600">
            MercaMex
          </Link>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
