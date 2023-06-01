import React, { useState } from "react";
import "./Filters.css";

const categoryOptions = ["cell_phone","memory","clock","ipad","iphone","tablet","printer","headphone"];

function Filters({ onApplyFilters, handleResetFilters }) {
  // Definición de los estados para los filtros
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");

  // Manejador de cambios para la categoría
  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategoryFilter(value);
  };

  // Manejador de cambios para el precio mínimo y máximo
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPriceFilter(value);
    } else if (name === "maxPrice") {
      setMaxPriceFilter(value);
    }
  };

  // Manejador de cambios para la condición
  const handleConditionChange = (event) => {
    const { value } = event.target;
    setConditionFilter(value);
  };

  // Manejador para aplicar los filtros
  const handleApplyFilters = () => {
    const filters = {
      category: categoryFilter,
      minPrice: minPriceFilter,
      maxPrice: maxPriceFilter,
      condition: conditionFilter,
    };
    onApplyFilters(filters);
  };

  // Manejador para resetear los filtros
  const resetFilters = () => {
    setCategoryFilter("");
    setMinPriceFilter("");
    setMaxPriceFilter("");
    setConditionFilter("");
    handleResetFilters();
  };

  return (
    <div className="Filters">
      <h2>Filters</h2>
      <div className="filterSection">
        <h3>Category</h3>
        {/* Iteración sobre las opciones de categoría */}
        {categoryOptions.map((option) => (
          <label key={option}>
            {/* Input de radio para seleccionar la categoría */}
            <input
              type="radio"
              name="category"
              value={option}
              checked={categoryFilter === option}
              onChange={handleCategoryChange}
            />
            {option}
          </label>
        ))}
      </div>
      <div className="filterSection">
        <h3>Price</h3>
        <label>
          Min Price:
          {/* Input para el precio mínimo */}
          <input
            type="number"
            name="minPrice"
            value={minPriceFilter}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Max Price:
          {/* Input para el precio máximo */}
          <input
            type="number"
            name="maxPrice"
            value={maxPriceFilter}
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div className="filterSection">
        <h3>Condition</h3>
        <label>
          {/* Input de radio para la condición "new" */}
          <input
            type="radio"
            name="condition"
            value="new"
            checked={conditionFilter === "new"}
            onChange={handleConditionChange}
          />
          New
        </label>
        <label>
          {/* Input de radio para la condición "used" */}
          <input
            type="radio"
            name="condition"
            value="used"
            checked={conditionFilter === "used"}
            onChange={handleConditionChange}
          />
          Used
        </label>
      </div>
      <div className="buttonSection">
        {/* Botón para aplicar los filtros */}
        <button onClick={handleApplyFilters}>Apply Filters</button>
        {/* Botón para resetear los filtros */}
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
    </div>
  );
}

export default Filters;
