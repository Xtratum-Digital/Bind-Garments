import React from 'react';

export default function Contact() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Have questions or want to partner with us? Reach out today.
                </p>
                <div style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
                    <p>Email: contact@bind-garments.com</p>
                    <p>Address: 123 Garment Way, Textile Center</p>
                </div>
            </section>
        </main>
    );
}
