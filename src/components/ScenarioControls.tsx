import React from 'react';
import type { ShiftDifferentialInput } from '../logic/shiftDifferentialCalculations';

interface ScenarioControlsProps {
    values: ShiftDifferentialInput;
    onChange: (field: keyof ShiftDifferentialInput, value: number | boolean) => void;
}

export const ScenarioControls: React.FC<ScenarioControlsProps> = ({ values, onChange }) => {
    const differentialOptions = [
        { label: '$1/hr', value: 1 },
        { label: '$2/hr', value: 2 },
        { label: '$3/hr', value: 3 },
        { label: '$5/hr', value: 5 },
    ];

    const hoursOptions = [
        { label: '20 hrs', value: 20 },
        { label: '32 hrs', value: 32 },
        { label: '40 hrs', value: 40 },
        { label: '48 hrs', value: 48 },
    ];

    return (
        <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Quick Adjustments</h3>

            {/* Differential Quick Select */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ marginBottom: 'var(--space-2)' }}>Shift Differential</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {differentialOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('differentialAmount', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.differentialAmount === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.differentialAmount === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.differentialAmount === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Hours Quick Select */}
            <div>
                <label style={{ marginBottom: 'var(--space-2)' }}>Hours per Week</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {hoursOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('hoursPerWeek', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.hoursPerWeek === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.hoursPerWeek === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.hoursPerWeek === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
