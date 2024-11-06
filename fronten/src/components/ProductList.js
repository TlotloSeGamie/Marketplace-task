import React, { useState } from 'react';
import './ProductList.css'; 
import nike1 from '../Images/AIR+MAX+DN.png'; 
import nike2 from '../Images/NIKE+AIR+MAX+PLUS.png';
import nike3 from '../Images/AIR+MAX+PLUS+III.png'
;

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
            name: 'Nike Air Max 270',
            price: 'R2,000.00',
            image: nike1,
            description: 'A comfortable and stylish Nike Air Max sneaker with advanced cushioning and support.',
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            price: 'R1,800.00',
            image: nike2,
            description: 'The iconic Nike Air Force 1, offering timeless style and durable design for everyday wear.',
        },
        {
            id: 3,
            name: 'Nike Zoom Freak 4',
            price: 'R2,500.00',
            image: nike3,
            description: 'The Nike Zoom Freak 4 is designed for speed, comfort, and style, perfect for basketball players.',
        },
    ];

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className="product-btn" onClick={() => handleViewDetails(product)}>
                        View Details
                    </button>
                </div>
            ))}

            {isModalOpen && selectedProduct && (
                <div className="product-modal">
                    <div className="product-modal-content">
                        <button onClick={handleCloseModal} className="close-btn">Close</button>
                        <h2>{selectedProduct.name}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <p><strong>Price:</strong> {selectedProduct.price}</p>
                        <p><strong>Description:</strong> {selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
