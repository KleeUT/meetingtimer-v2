export const calculateTotalSalary = (
  participants: number,
  yearlySalary: number
) => ({
  perYear: () => participants * yearlySalary,
  perMonth: () => (participants * yearlySalary) / 12,
  perWeek: () => (participants * yearlySalary) / 52,
  perDay: () => (participants * yearlySalary) / 52 / 5,
  perHour: () => (participants * yearlySalary) / 52 / 5 / 8,
  perMinute: () => (participants * yearlySalary) / 52 / 5 / 8 / 60,
  perSecond: () => (participants * yearlySalary) / 52 / 5 / 8 / 60 / 60
});
