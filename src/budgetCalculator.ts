type BudgetStatus = "Low budget" | "Budget ok" | "Over budget"; // siempre declaro esto primero

function calculateBudgetStatus(
  gastos: number,
  presupuesto: number
): BudgetStatus {
  const porcentaje = (gastos / presupuesto) * 100; // aqui realizo el calculo que necesito para saber su porcentaje y luiego poder usar porcentaje 

  if (porcentaje < 80) {
    return "Low budget";
  } else if (porcentaje <= 100) {
    return "Budget ok";
  } else {
    return "Over budget"; // recordar que return finaliza la ejecucuon de una funcion 
  }
}

console.log(calculateBudgetStatus(850, 1000)); // realizo la prueba 