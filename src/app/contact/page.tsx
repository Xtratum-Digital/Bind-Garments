import React from 'react';

export default function Contact() {
    return (
        <main style={{ minHeight: '100vh', padding: '8rem 2rem 4rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Contact Us</h1>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>QASR ALFALAH UNIFORMS TAILORING</h2>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                        Mob: 56 800 1696
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    <div className="glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>AJMAN</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Main Branch & Tailoring Studio</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>SHARJAH</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Regional Distribution Center</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
