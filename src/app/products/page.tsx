import React from 'react';

export default function Products() {
    const sectors = [
        { name: 'SCHOOL UNIFORM', desc: 'Educational reforms, like the uniform, are also important for schools.' },
        { name: 'HOSPITAL UNIFORM', desc: 'Not all angels have wings. some have scrubs.' },
        { name: 'HOUSE KEEPING UNIFORM', desc: 'A modern and sleek approach to classic housekeeping uniforms' },
        { name: 'OFFICE UNIFORM', desc: 'Style is a reflection of your attitude and your personality.' }
    ];

    const items = [
        'COVERALL', 'CARGO TROUSER', 'ROUND NECK T-SHIRT', 'POLO T-SHIRT',
        'WINTER JACKETS', 'LAB COAT', 'GRADUATION UNIFORM', 'APRON',
        'SPORTS UNIFORM', 'CHEFF JACKETS', 'SHIRT & PANT',
        'SECURITY JACKET', 'CUSTOMIZED T-SHIRT', 'RIBBONS', 'SASH'
    ];

    return (
        <main style={{ minHeight: '100vh', padding: '8rem 2rem 4rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>Our Expertise</h1>

                {/* Sectors */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    {sectors.map((sector) => (
                        <div key={sector.name} className="glass" style={{ padding: '2rem' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>{sector.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{sector.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Items */}
                <section className="glass" style={{ padding: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }} className="gradient-text">Products & Items</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {items.map((item) => (
                            <div key={item} style={{
                                padding: '1.5rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '0.5rem',
                                borderLeft: '4px solid var(--primary-color)',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
