import React from 'react';

export const SEOText: React.FC = () => {
    return (
        <div className="card" style={{ background: '#F8FAFC' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This shift differential pay calculator estimates additional earnings based on your differential
                rate and hours worked. These figures are estimates only and actual pay will depend on your
                specific employer policies, shift schedules, and applicable labor agreements. Calculations
                shown are before taxes and deductions. This calculator is for informational purposes and
                does not guarantee any specific wage level or constitute employment advice.
            </p>
        </div>
    );
};
