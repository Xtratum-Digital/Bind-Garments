import React from 'react';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'max-content',
            padding: '0.75rem 2rem',
            display: 'flex',
            gap: '2rem',
            zIndex: 1000,
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <Link href="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 'bold' }}>Bind</Link>
            <Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</Link>
            <Link href="/services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
            <Link href="/products" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Products</Link>
            <Link href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</Link>
        </nav>
    );
}
