import { React } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ services, onFilter }) {
  const handleFilterServices = (value) => {
    const filteredData = services.filter((service) => {
      return (
        service.description
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim()) ||
        service.city
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim()) ||
        service.category
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim()) ||
        service.title
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim()) ||
        service.price.toLowerCase().trim().includes(value.toLowerCase().trim())
      );
    });
    onFilter(filteredData);
  };

  return (
    <div>
      <input
        class="nav-input"
        type="text"
        placeholder="Znajdź usługę..."
        onChange={(e) => handleFilterServices(e.target.value)}
      />
      <Link to="/all-services">
        <button>&#127859;</button>
      </Link>
    </div>
  );
}
