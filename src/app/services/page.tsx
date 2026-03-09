import React from 'react';

export default function Services() {
    const services = [
        { name: 'STITCHING', desc: 'Professional tailoring and stitching services for all types of uniforms.' },
        { name: 'EMBROIDERY', desc: 'High-quality embroidery for logos, names, and custom designs.' },
        { name: 'SCREEN PRINTING', desc: 'Durable and vibrant screen printing for bulk orders.' },
        { name: 'SUBLIMATION PRINTING', desc: 'Advanced sublimation printing for complex, full-color designs.' }
    ];

    return (
        <main style={{ minHeight: '100vh', padding: '8rem 2rem 4rem' }}>
            <section className="glass" style={{ padding: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Our Services</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service) => (
                        <div key={service.name} className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--secondary-color)' }}>
                            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{service.name}</h2>
                            <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
