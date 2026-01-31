import React from 'react';

export const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <h1>Shift Differential Pay Calculator (2026)</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
                Estimate additional earnings from shift differential pay
            </p>
        </header>
    );
};
