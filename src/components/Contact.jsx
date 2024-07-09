import React from 'react';

function Contact() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ color: '#333' }}>Contact Us</h1>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                We would love to hear from you! If you have any questions, comments, or concerns, please feel free to reach out to us.
            </p>
            <h2 style={{ color: '#333' }}>Our Contact Information</h2>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                Email: <a href="mailto:support@ecommerce.com" style={{ color: '#1a73e8' }}>support@ecommerce.com</a>
            </p>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                Phone: <a href="tel:+1234567890" style={{ color: '#1a73e8' }}>+1 (234) 567-890</a>
            </p>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
                Address: 123 eCommerce St, Online City, Web 45678
            </p>
        </div>
    );
}

export default Contact;
