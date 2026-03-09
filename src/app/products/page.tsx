import React from 'react';

export default function Products() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Products</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                    Discover our collection of high-quality garments and digital management tools.
                </p>
            </section>
        </main>
    );
}
