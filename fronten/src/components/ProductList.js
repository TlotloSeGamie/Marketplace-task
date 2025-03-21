import React, { useState } from "react";
import "./ProductList.css";
import popular1 from "../assets/summer boys.webp";
import popular2 from "../assets/summer drip men.jpg";
import popular3 from "../assets/summer girls.jpg";
const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "",
      price: "2000",
      image: popular1,
      description: "",
    },
    {
      id: 2,
      name: "",
      price: "1800",
      image: popular2,
      description: "",
    },
    {
      id: 3,
      name: "",
      price: "2500",
      image: popular3,
      description: "",
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
            className="product-btn"
            onClick={() => handleViewDetails(product)}
          >
            View Details
          </button>
        </div>
      ))}

      {isModalOpen && selectedProduct && (
        <div className="product-modal">
          <div className="product-modal-content">
            <button onClick={handleCloseModal} className="close-btn">
              Close
            </button>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>
              <strong>Price:</strong> {selectedProduct.price}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
