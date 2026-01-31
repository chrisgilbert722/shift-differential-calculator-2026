import React from 'react';
import type { ShiftDifferentialInput } from '../logic/shiftDifferentialCalculations';

interface InputCardProps {
    values: ShiftDifferentialInput;
    onChange: (field: keyof ShiftDifferentialInput, value: number | boolean) => void;
}

export const InputCard: React.FC<InputCardProps> = ({ values, onChange }) => {
    return (
        <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Base Hourly Rate */}
                <div>
                    <label htmlFor="baseHourlyRate">Base Hourly Rate ($)</label>
                    <input
                        type="number"
                        id="baseHourlyRate"
                        value={values.baseHourlyRate}
                        onChange={(e) => onChange('baseHourlyRate', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.50"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your regular hourly pay rate
                    </span>
                </div>

                {/* Shift Differential Amount */}
                <div>
                    <label htmlFor="differentialAmount">Shift Differential Amount ($/hour)</label>
                    <input
                        type="number"
                        id="differentialAmount"
                        value={values.differentialAmount}
                        onChange={(e) => onChange('differentialAmount', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.25"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Additional pay per hour for working shift differential
                    </span>
                </div>

                {/* Hours per Week */}
                <div>
                    <label htmlFor="hoursPerWeek">Hours Worked per Week</label>
                    <input
                        type="number"
                        id="hoursPerWeek"
                        value={values.hoursPerWeek}
                        onChange={(e) => onChange('hoursPerWeek', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="168"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Number of differential shift hours per week
                    </span>
                </div>

                {/* Weeks per Year */}
                <div>
                    <label htmlFor="weeksPerYear">Weeks per Year</label>
                    <input
                        type="number"
                        id="weeksPerYear"
                        value={values.weeksPerYear}
                        onChange={(e) => onChange('weeksPerYear', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="52"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Total weeks worked per year (typically 52)
                    </span>
                </div>
            </div>
        </div>
    );
};
