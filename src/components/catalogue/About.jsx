import React from 'react';

function About() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ color: '#333' }}>About Us</h1>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                Welcome to our eCommerce store! We are dedicated to providing you with the best online shopping experience.
                Our store offers a wide range of products to cater to all your needs.
            </p>
            <h2 style={{ color: '#333' }}>Our Mission</h2>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                Our mission is to deliver high-quality products at competitive prices, ensuring customer satisfaction with every purchase.
            </p>
            <h2 style={{ color: '#333' }}>Why Choose Us?</h2>
            <ul style={{ color: '#666', lineHeight: '1.6' }}>
                <li>Wide selection of products</li>
                <li>Competitive pricing</li>
                <li>Fast and reliable shipping</li>
                <li>Excellent customer service</li>
            </ul>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                Thank you for choosing our store. We look forward to serving you!
            </p>
        </div>
    );
}

export default About;
