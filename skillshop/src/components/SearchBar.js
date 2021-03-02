import "./../styles/SearchBar.css";

import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ serviceList, setSearchedServices }) {

  const [form, setForm] = useState("");

  const updateField = (value) => {
    setForm(value);
  };

  const handleFilterServices = () => {
    const value = form;
    const filteredData = serviceList.filter((service) => {
      return service.description.includes(value) ||
        service.city.includes(value) ||
        service.category.includes(value) ||
        service.title.includes(value) ||
        service.price.includes(value)
    });

    setSearchedServices(filteredData);
  };

  return (
    <div class="search-bar">
      <input
        class="nav-input"
        type="text"
        placeholder="Znajdź usługę..."
        onChange={(e) => updateField(e.target.value)}
      />
     <Link class="custom-link" to="/searched-services">
        <button 
        class="search-btn"
        onClick={handleFilterServices}
        >&#127859;</button>
      </Link>
    </div>
  );
}
