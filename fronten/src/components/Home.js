import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import './Home.css';
import heroImage from "../assets/HeroImg1.webp";
import heroImage1 from "../assets/HeroImg2.webp";
import heroImage2 from "../assets/HeroImg3.webp"
import original from '../assets/original-shorts.jpg';
import swim from "../assets/textured Swim.avif";
import polo from "../assets/range polos.jpg";
import training from "../assets/training shorts.webp";
import popular1 from '../assets/summer boys.webp';
import popular2 from '../assets/summer drip men.jpg';
import popular3 from '../assets/summer girls.jpg';
import popular4 from '../assets/summer jean.webp';
import popular5 from '../assets/summer kids 2.webp';
import popular6 from '../assets/summer men 1.webp';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(1);
    const products = [
        {
            id: 1,
            name: '',
            price: '2000',
            image: popular1,
            description: '',
        },
        {
            id: 2,
            name: '',
            price: '1800',
            image: popular2,
            description: '',
        },
        {
            id: 3,
            name: '',
            price: '2500',
            image: popular3,
            description: '',
        },
        {
            id: 1,
            name: '',
            price: '2000',
            image: popular4,
            description: '',
        },
        {
            id: 2,
            name: '',
            price: '1800',
            image: popular5,
            description: '',
        },
        {
            id: 3,
            name: '',
            price: '2500',
            image: popular6,
            description: '',
        },
        {
            id: 1,
            name: '',
            price: '2000',
            image: popular1,
            description: '',
        },
    ];

    const heroImages = [heroImage, heroImage1, heroImage2];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setQuantity(1); 
        setSize(1); 
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };


    return (
        <div>
            <div className="main-home">
                <Navbar />
                <section
            className="hero"
            style={{
                height: "60vh",
                bottom: "3rem",
                backgroundImage: `url(${heroImages[currentSlide]})`,
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div className="hero-content">
                <h1>Step into Style with SunThread Market</h1>
                <p>Explore the latest trends and timeless designs for men, women, and kids.</p>
                <button className="shop-now-btn">Shop Now</button>
            </div>
        </section>
                <div className="categories">
                    <h2>Trending</h2>
                    <div className="category-list">
                        <div className="category-item">
                            <img src={original} alt="Original Short" />
                            <h3>Original shorts</h3>
                        </div>
                        <div className="category-item">
                            <img src={training} alt="Training shorts" />
                            <h3>Training Shorts</h3>
                        </div>
                        <div className="category-item">
                            <img src={swim} alt="Swim Shorts" />
                            <h3>Swim Shorts</h3>
                        </div>
                        <div className="category-item">
                            <img src={polo} alt="Range Polos" />
                            <h3>Range Polo</h3>
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
                                <label>Size:</label>
                                <input
                                    type="number"
                                    value={size}
                                    min="1"
                                    onChange={handleSizeChange}
                                    className="size-input"
                                />
                            </div>
                            <div className="product-icons">
                                <button className="icon-btn">
                                    <FaShoppingCart /> Add to Cart
                                </button>
                                <button className="purchase-btn">Purchase Now</button>
                            </div>
                        </div>
                    </div>
                )}
                <section className="call-to-action-news">
                    <h2>Step into style with SunThread Market</h2>
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
