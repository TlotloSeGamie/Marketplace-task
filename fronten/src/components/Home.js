import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import './Home.css';
import heroImage from '../Images/heroimg1.jpg'
import menCategoryImage from '../Images/men.jpg';
import womenCategoryImage from '../Images/women.jpg';
import kidsCategoryImage from '../Images/kids.jpg';
import popular1 from '../Images/AIR+MAX+DN.png';
import popular2 from '../Images/NIKE+AIR+MAX+PLUS.png';
import popular3 from '../Images/AIR+MAX+PLUS+III.png';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const products = [
        {
            id: 1,
            name: 'Nike Air Max 270',
            price: '2000',
            image: popular1,
            description: 'A comfortable and stylish Nike Air Max sneaker with advanced cushioning and support.',
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            price: '1800',
            image: popular2,
            description: 'The iconic Nike Air Force 1, offering timeless style and durable design for everyday wear.',
        },
        {
            id: 3,
            name: 'Nike Zoom Freak 4',
            price: '2500',
            image: popular3,
            description: 'The Nike Zoom Freak 4 is designed for speed, comfort, and style, perfect for basketball players.',
        },
        {
            id: 1,
            name: 'Nike Air Max 270',
            price: '2000',
            image: popular1,
            description: 'A comfortable and stylish Nike Air Max sneaker with advanced cushioning and support.',
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            price: '1800',
            image: popular2,
            description: 'The iconic Nike Air Force 1, offering timeless style and durable design for everyday wear.',
        },
        {
            id: 3,
            name: 'Nike Zoom Freak 4',
            price: '2500',
            image: popular3,
            description: 'The Nike Zoom Freak 4 is designed for speed, comfort, and style, perfect for basketball players.',
        },
        {
            id: 1,
            name: 'Nike Air Max 270',
            price: '2000',
            image: popular1,
            description: 'A comfortable and stylish Nike Air Max sneaker with advanced cushioning and support.',
        },
    ];

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setQuantity(1); 
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };


    return (
        <div>
            <Navbar />
            <div className="main-home">
                <section
                    className="hero"
                    style={ {height: '30vh', bottom: '3rem' , backgroundImage: `url(${heroImage})` }}
                >
                    <div className="hero-content">
                        <h1>Step into Style with BigSteppa</h1>
                        <p>Explore the latest trends and timeless designs for men, women, and kids.</p>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </section>
                <div className="categories">
                    <h2>Shop by Category</h2>
                    <div className="category-list">
                        <div className="category-item">
                            <img src={menCategoryImage} alt="Shoes for men" />
                            <h3>Men</h3>
                        </div>
                        <div className="category-item">
                            <img src={womenCategoryImage} alt="Shoes for women" />
                            <h3>Women</h3>
                        </div>
                        <div className="category-item">
                            <img src={kidsCategoryImage} alt="Shoes for kids" />
                            <h3>Kids</h3>
                        </div>
                    </div>
                </div>
                <section className="popular-products">
                    <h2>Popular Products</h2>
                    <div className="product-list">
                        {products.map((product) => (
                            <div className="product-item" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>R{product.price}</p>
                                <button className="product-btn" onClick={() => handleViewDetails(product)}>
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                {isModalOpen && selectedProduct && (
                    <div className="product-modal">
                        <div className="product-modal-content">
                            <button onClick={handleCloseModal} className="close-btn">Close</button>
                            <h2>{selectedProduct.name}</h2>
                            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-img" />
                            <p><strong>Price:</strong> R {selectedProduct.price}</p>
                            <p><strong>Description:</strong> {selectedProduct.description}</p>
                            <div className="quantity-container">
                                <label>Quantity:</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    onChange={handleQuantityChange}
                                    className="quantity-input"
                                />
                            </div>
                            <div className="product-icons">
                                <button className="icon-btn">
                                    <FaHeart /> Add to Favorites
                                </button>
                                <button className="icon-btn">
                                    <FaShoppingCart /> Add to Cart
                                </button>
                            </div>
                            <button className="purchase-btn">Purchase Now</button>
                        </div>
                    </div>
                )}
                <section className="call-to-action">
                    <h2>Be a Step Ahead</h2>
                    <p>Sign up for our newsletter to get exclusive deals and the latest updates.</p>
                    <button
                        className="cta-btn"
                        onClick={() => navigate('/newsletter')}
                    >
                        Sign Up Now
                    </button>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
