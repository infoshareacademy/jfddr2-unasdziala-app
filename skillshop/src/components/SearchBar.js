import { React, useState } from "react";

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
    <input
      class="nav-input"
      type="text"
      placeholder="Znajdź usługę..."
      onChange={(e) => handleFilterServices(e.target.value)}
    />
  );
}
