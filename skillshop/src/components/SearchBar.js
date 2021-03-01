import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ services, onFilter }) {
  const handleFilterServices = (value) => {
    const filteredData = services.filter((service) => {
      return service.description.includes(value) ||
        service.city.includes(value) ||
        service.category.includes(value) ||
        service.title.includes(value) ||
        service.price.includes(value)
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
