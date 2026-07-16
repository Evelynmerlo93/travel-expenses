interface ExpenseReport {
  travelDays: number;
  expenseDays: number;
  dailyBudget: number;
  averageDailyExpense: number;
  underBudget: boolean;
  rating: number;
  feedback: string;
}

export function generateExpenseReport(
  dailyExpenses: number[],
  dailyBudget: number,
):ExpenseReport {
  if (dailyExpenses.some((expense) => expense < 0)) {
    throw new Error("Les despeses no poden ser negatives");
  } 

  const travelDays = dailyExpenses.length;

  const expenseDays = dailyExpenses.filter((expense) => expense > 0).length;

  const totalExpenses = dailyExpenses.reduce(
    (total, number) => total + number,
    0,
  );

  const averageDailyExpense = totalExpenses / travelDays;

  const underBudget = averageDailyExpense <= dailyBudget;

  let rating:number;
  let feedback:string;

  if (averageDailyExpense <= dailyBudget) {
    rating = 3;
    feedback = "Excelente gestion";
  } else if (averageDailyExpense <= dailyBudget * 1.2) {
    rating = 2;
    feedback = "Correcto, pero ajustado";
  } else {
    rating = 1;
    feedback = "Puede mejorar";
  }

  const report = {
    travelDays,
    expenseDays,
    dailyBudget,
    averageDailyExpense,
    underBudget,
    rating,
    feedback,
  }
  return report;
}
  console.log(generateExpenseReport([50, 0, 120, 85], 100))