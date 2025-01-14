import { Link } from 'react-router-dom';

function Item({ id, title, price, image }) {
  return (
    <Link to={`/item/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-blue-600 font-bold mt-2">
            ${price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Item;