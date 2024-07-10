import React from 'react';

function Contact() {
    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '700px', margin: 'auto', marginTop: '50px' }}>
            <h1 style={{ color: '#ff6347', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>
            <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '20px', textAlign: 'center' }}>
                We would love to hear from you! If you have any questions, comments, or concerns, please feel free to reach out to us.
            </p>
            <h2 style={{ color: '#ff6347', marginBottom: '10px' }}>Our Contact Information</h2>
            <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '10px' }}>
                <svg width="16" height="16" fill="#ff6347" style={{ marginRight: '8px', verticalAlign: 'middle' }} viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-5.59 3.353a1 1 0 0 1-1.058 0L2 5.383V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.383z" /></svg>
                Email: <a href="mailto:support@ecommerce.com" style={{ color: '#ff6347', textDecoration: 'none' }}>support@ecommerce.com</a>
            </p>
            <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '10px' }}>
                <svg width="16" height="16" fill="#ff6347" style={{ marginRight: '8px', verticalAlign: 'middle' }} viewBox="0 0 16 16"><path d="M3 2a1 1 0 0 0-1 1v2.879c0 .401.243.768.617.92a6.4 6.4 0 0 0 3.252.876.5.5 0 0 1 .4.233l1.252 2.252a.5.5 0 0 0 .4.233 6.4 6.4 0 0 0 3.252-.876A.98.98 0 0 0 14 5.879V3a1 1 0 0 0-1-1H3zm1 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
                Phone: <a href="tel:+1234567890" style={{ color: '#ff6347', textDecoration: 'none' }}>+1 (234) 567-890</a>
            </p>
            <p style={{ color: '#333', lineHeight: '1.8' }}>
                <svg width="16" height="16" fill="#ff6347" style={{ marginRight: '8px', verticalAlign: 'middle' }} viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.5 1.018a7 7 0 1 1-6.978 6.978A7 7 0 0 1 7.5 1.018zM8 15V9H6v6H4v-6H2v6H1V9H0V8h16v1h-1v6h-1v-6h-2v6h-1v-6H8v6H6v-6H4v6H2v-6H1v6H0V8h16v1h-1v6h-1v-6h-2v6h-1v-6H8v6H6v-6H4v6H2v-6H1v6H0V8h16v1h-1v6h-1v-6H8v6z" /></svg>
                Address: 123 eCommerce St, Online City, Web 45678
            </p>
        </div>
    );
}

export default Contact;
