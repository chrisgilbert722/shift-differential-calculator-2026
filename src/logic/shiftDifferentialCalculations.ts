export interface ShiftDifferentialInput {
    baseHourlyRate: number;
    differentialAmount: number;
    hoursPerWeek: number;
    weeksPerYear: number;
}

export interface ShiftDifferentialResult {
    totalDifferentialPay: number;
    totalAnnualEarnings: number;
    effectiveHourlyRate: number;
    basePayAnnual: number;
    differentialPayAnnual: number;
    basePayWeekly: number;
    differentialPayWeekly: number;
    totalWeeklyPay: number;
    baseHourlyRate: number;
    differentialAmount: number;
    hoursPerWeek: number;
    weeksPerYear: number;
    message: string;
}

export function calculateShiftDifferential(input: ShiftDifferentialInput): ShiftDifferentialResult {
    const { baseHourlyRate, differentialAmount, hoursPerWeek, weeksPerYear } = input;

    // Calculate weekly values
    const basePayWeekly = baseHourlyRate * hoursPerWeek;
    const differentialPayWeekly = differentialAmount * hoursPerWeek;
    const totalWeeklyPay = basePayWeekly + differentialPayWeekly;

    // Calculate annual values
    const basePayAnnual = basePayWeekly * weeksPerYear;
    const differentialPayAnnual = differentialPayWeekly * weeksPerYear;
    const totalAnnualEarnings = totalWeeklyPay * weeksPerYear;

    // Calculate effective hourly rate
    const effectiveHourlyRate = baseHourlyRate + differentialAmount;

    // Generate message
    let message = '';
    if (differentialAmount > 0) {
        const percentIncrease = ((differentialAmount / baseHourlyRate) * 100).toFixed(1);
        message = `Shift differential adds ${percentIncrease}% to your base hourly rate`;
    } else {
        message = 'Enter a differential amount to see additional earnings';
    }

    return {
        totalDifferentialPay: differentialPayAnnual,
        totalAnnualEarnings,
        effectiveHourlyRate,
        basePayAnnual,
        differentialPayAnnual,
        basePayWeekly,
        differentialPayWeekly,
        totalWeeklyPay,
        baseHourlyRate,
        differentialAmount,
        hoursPerWeek,
        weeksPerYear,
        message
    };
}
