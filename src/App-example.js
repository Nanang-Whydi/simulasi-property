import React, { useState } from "react";

const HouseSelector = () => {
  const houses = {
    luxury: {
      image: "https://via.placeholder.com/300x200?text=Luxury+House",
      price: "$1,000,000",
    },
    modern: {
      image: "https://via.placeholder.com/300x200?text=Modern+House",
      price: "$500,000",
    },
    traditional: {
      image: "https://via.placeholder.com/300x200?text=Traditional+House",
      price: "$300,000",
    },
  };

  const [selectedCategory, setSelectedCategory] = useState("luxury");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const selectedHouse = houses[selectedCategory];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginTop: "20px" }}>
        <h1>Ukuran Rumah</h1>
        <img
          src={selectedHouse.image}
          alt={`${selectedCategory} house`}
          style={{
            width: "300px",
            height: "200px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
        <p>{selectedHouse.price}</p>
      </div>

      <h2>Pilih Ukuran Rumah</h2>
      <div>
        <label>
          <input
            type="radio"
            value="luxury"
            checked={selectedCategory === "luxury"}
            onChange={handleCategoryChange}
          />
          Luxury
        </label>
        <label>
          <input
            type="radio"
            value="modern"
            checked={selectedCategory === "modern"}
            onChange={handleCategoryChange}
          />
          Modern
        </label>
        <label>
          <input
            type="radio"
            value="traditional"
            checked={selectedCategory === "traditional"}
            onChange={handleCategoryChange}
          />
          Traditional
        </label>
      </div>
    </div>
  );
};

export default HouseSelector;
