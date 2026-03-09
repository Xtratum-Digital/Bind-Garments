import React from 'react';

export default function About() {
    return (
        <main style={{ minHeight: '100vh', padding: '8rem 2rem 4rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>About Us</h1>

                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '1rem' }}>OUR VISION</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        We offer our clients the most effective angle to approach their marketing needs and effectively build their brand.
                        We offer a truly spectacular marketing experience, from client service to the final product.
                    </p>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
                    <h2 style={{ color: 'var(--secondary-color)', fontSize: '2rem', marginBottom: '1rem' }}>OUR MISSION</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
                        To strive for the best client service possible, to offer a truly spectacular marketing experience.
                    </p>
                </div>
            </section>
        </main>
    );
}
