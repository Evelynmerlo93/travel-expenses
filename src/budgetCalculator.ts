type BudgetStatus = "Low budget" | "Budget ok" | "Over budget"; 

function calculateBudgetStatus(
  gastos: number,
  presupuesto: number
): BudgetStatus {
  const porcentaje = (gastos / presupuesto) * 100;   

  if (porcentaje < 80) {
    return "Low budget";
  } else if (porcentaje <= 100) {
    return "Budget ok";
  } else {
    return "Over budget"; 
  }
}

console.log(calculateBudgetStatus(850, 1000)); 