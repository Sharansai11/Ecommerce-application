import React from 'react';

function About() {
    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '700px', margin: 'auto', marginTop: '50px' }}>
            <h1 style={{ color: '#ff6347', textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
            <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '20px', textAlign: 'center' }}>
                Welcome to our eCommerce store! We are dedicated to providing you with the best online shopping experience.
                Our store offers a wide range of products to cater to all your needs.
            </p>
            <h2 style={{ color: '#ff6347', marginBottom: '10px' }}>Our Mission</h2>
            <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '20px' }}>
                Our mission is to deliver high-quality products at competitive prices, ensuring customer satisfaction with every purchase.
            </p>
            <h2 style={{ color: '#ff6347', marginBottom: '10px' }}>Why Choose Us?</h2>
            <ul style={{ color: '#333', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}>Wide selection of products</li>
                <li style={{ marginBottom: '10px' }}>Competitive pricing</li>
                <li style={{ marginBottom: '10px' }}>Fast and reliable shipping</li>
                <li style={{ marginBottom: '10px' }}>Excellent customer service</li>
            </ul>
            <p style={{ color: '#333', lineHeight: '1.8', textAlign: 'center' }}>
                Thank you for choosing our store. We look forward to serving you!
            </p>
        </div>
    );
}

export default About;
