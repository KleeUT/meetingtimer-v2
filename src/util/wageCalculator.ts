export const calculateTotalSalary = (
  participants: number,
  yearlySalary: number
) => ({
  perYear: () => participants * yearlySalary,
  perMonth: () => (participants * yearlySalary) / 12,
  perWeek: () => (participants * yearlySalary) / 52,
  perHour: () => (participants * yearlySalary) / 52 / 40,
  perMinute: () => (participants * yearlySalary) / 52 / 40 / 60,
  perSecond: () => (participants * yearlySalary) / 52 / 40 / 60 / 60
});
