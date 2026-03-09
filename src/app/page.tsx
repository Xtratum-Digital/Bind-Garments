import React from 'react';

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '800px', textAlign: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold', lineHeight: '1.1' }}>
                    QASR ALFALAH UNIFORMS TAILORING
                </h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: '500' }}>
                    We Establish Extraordinary Connections!
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        transition: 'var(--transition-smooth)'
                    }}>
                        View Our Products
                    </button>
                    <button className="glass" style={{
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1.1rem'
                    }}>
                        Contact Us
                    </button>
                </div>
            </section>
        </main>
    );
}
