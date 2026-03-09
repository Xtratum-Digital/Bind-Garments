import React from 'react';

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '800px', textAlign: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    Bind-Garments
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    The future of digital garment manufacturing and supply chain transparency.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'var(--transition-smooth)'
                    }}>
                        Explore Solutions
                    </button>
                    <button className="glass" style={{
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        Get in Touch
                    </button>
                </div>
            </section>
        </main>
    );
}
