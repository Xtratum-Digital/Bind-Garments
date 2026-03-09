import React from 'react';

export default function Services() {
    return (
        <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Services</h1>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                        <h2 style={{ color: 'var(--primary-color)' }}>Garment Manufacturing</h2>
                        <p style={{ color: 'var(--text-muted)' }}>High-precision manufacturing with ethical standards.</p>
                    </li>
                    <li className="glass" style={{ padding: '2rem' }}>
                        <h2 style={{ color: 'var(--secondary-color)' }}>Supply Chain Integration</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Real-time tracking and digital management.</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}
