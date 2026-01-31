import React from 'react';
import type { ShiftDifferentialResult } from '../logic/shiftDifferentialCalculations';

interface BreakdownTableProps {
    result: ShiftDifferentialResult;
}

const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const BreakdownTable: React.FC<BreakdownTableProps> = ({ result }) => {
    const weeklyRows = [
        { label: 'Base Pay (Weekly)', value: formatMoney(result.basePayWeekly), isTotal: false },
        { label: 'Differential Pay (Weekly)', value: formatMoney(result.differentialPayWeekly), isTotal: false },
        { label: 'Estimated Total Weekly Pay', value: formatMoney(result.totalWeeklyPay), isTotal: true },
    ];

    const annualRows = [
        { label: 'Base Pay (Annual)', value: formatMoney(result.basePayAnnual), isTotal: false },
        { label: 'Differential Pay (Annual)', value: formatMoney(result.differentialPayAnnual), isTotal: false },
        { label: 'Estimated Total Annual Pay', value: formatMoney(result.totalAnnualEarnings), isTotal: true },
    ];

    const renderTable = (rows: Array<{ label: string; value: string; isTotal: boolean }>, isLast = false) => (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} style={{
                        borderBottom: (isLast && idx === rows.length - 1) ? 'none' : '1px solid var(--color-border)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#F8FAFC'
                    }}>
                        <td style={{ padding: 'var(--space-3) var(--space-6)', color: 'var(--color-text-secondary)' }}>
                            {row.label}
                        </td>
                        <td style={{
                            padding: 'var(--space-3) var(--space-6)',
                            textAlign: 'right',
                            fontWeight: row.isTotal ? 700 : 400,
                            color: row.isTotal ? '#166534' : 'inherit'
                        }}>
                            {row.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="card" style={{ padding: '0' }}>
            {/* Weekly Breakdown Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1rem' }}>Estimated Weekly Breakdown</h3>
            </div>
            {renderTable(weeklyRows)}

            {/* Annual Breakdown Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', background: '#F0FDF4' }}>
                <h3 style={{ fontSize: '1rem', color: '#166534' }}>Estimated Annual Breakdown</h3>
            </div>
            {renderTable(annualRows, true)}
        </div>
    );
};
