import { useEffect, useState } from "react";

export default function DetalheDietaPage({ dieta }) {
  const [alimentos, setAlimentos] = useState([]);
  const [ fatorAtividade, setFatorAtividade ] = useState([]);
  const [ patologias, setPatologias ] = useState([]);
  const [ get, setGet ] = useState([]);
  const [ objetivo, setObjetivo ] = useState([]);
  const [ medidasCorporais, setMedidasCorporais ] = useState([]);

  useEffect(() => {
    setAlimentos(dieta.selectedFoods || []);
    setFatorAtividade(dieta.fatorAtividade);
    setGet(dieta.get);
    setPatologias(dieta.patologias || []);
    setObjetivo(dieta.objetivo);
    setMedidasCorporais(dieta.medidasCorporais || []);
    console.log(dieta);
  }, [dieta]);


  useEffect(() => {
      if (dieta) {
        setAlimentos(dieta.selectedFoods || []);
        setFatorAtividade(dieta.fatorAtividade || "");
        setGet(dieta.get || "");
        setMedidasCorporais(dieta.medidasCorporais || []);
        setPatologias(dieta.patologias || []);
        
        // tradução do objetivo
        if (dieta.objetivo === "0.80") {
          setObjetivo("Perder gordura (déficit calórico)");
        } else if (dieta.objetivo === "1.20") {
          setObjetivo("Ganhar massa muscular (superávit calórico)");
        } else {
          setObjetivo("Manutenção");
        }

        if (dieta.fatorAtividade === "1.2"){
          setFatorAtividade("Sedentário (quase nada de exercício)");
        } else if (dieta.fatorAtividade === "1.375") {
          setFatorAtividade("Levemente ativo (exercício 1-3 dias)");
        } else if (dieta.fatorAtividade === "1.55") {
          setFatorAtividade("Moderadamente ativo (3-5 dias/semana)");
        }

      }
    }, [dieta]);

  const mealNames = {
    1: "Café da manhã",
    2: "Almoço",
    3: "Lanche da tarde",
    4: "Jantar",
    5: "Ceia"
  };

  // Agrupar alimentos por refeição
  const groupedMeals = alimentos.reduce((acc, item) => {
    const mealId = item.idMeal ?? "sem-refeicao";
    if (!acc[mealId]) {
      acc[mealId] = [];
    }
    acc[mealId].push(item);
    return acc;
  }, {});

  // Calcular totais gerais
  const total = alimentos.reduce(
    (acc, food) => {
      acc.calorias += Number(food.calorias || 0);
      acc.proteinas += Number(food.proteinas || 0);
      acc.fibras += Number(food.fibras || 0);
      acc.gorduras += Number(food.gorduras || 0);
      acc.carboidratos += Number(food.carboidratos || 0);
      return acc;
    },
    { calorias: 0, proteinas: 0, fibras: 0, gorduras: 0, carboidratos: 0 }
  );

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Dietas</h2>

      <div className="mb-6 p-4 border rounded-lg bg-gray-50 shadow">
        <p><span className="font-semibold">Fator de Atividade:</span> {fatorAtividade}</p>
        <p><span className="font-semibold">Objetivo:</span> {objetivo}</p>
        <p><span className="font-semibold">Objetivo de Calorias:</span> {dieta.objetivoCalorias} kcal</p>
        <p><span className="font-semibold">GET (Gasto Energético Total):</span> {get} kcal</p>
        
        <div className="mt-2">
          <span className="font-semibold">Patologias:</span>
          {patologias && patologias.length > 0 ? (
            <ul className="list-disc list-inside">
              {patologias.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          ) : (
            <span> Nenhuma</span>
          )}
        </div>

      </div>

      {Object.entries(groupedMeals).map(([mealId, foods]) => (
        <div key={mealId} className="mb-6 p-4 border rounded-lg shadow">
          <h3 className="font-semibold text-blue-600 mb-2">
            {mealId === "sem-refeicao"
              ? "Refeição não identificada"
              : mealNames[mealId] || `Refeição ${mealId}`}
          </h3>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">Alimento</th>
                <th className="border p-2">Calorias</th>
                <th className="border p-2">Proteínas</th>
                <th className="border p-2">Fibras</th>
                <th className="border p-2">Gorduras</th>
                <th className="border p-2">Carboidratos</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">{food.name}</td>
                  <td className="border p-2">{food.calorias}</td>
                  <td className="border p-2">{food.proteinas}</td>
                  <td className="border p-2">{food.fibras}</td>
                  <td className="border p-2">{food.gorduras}</td>
                  <td className="border p-2">{food.carboidratos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Totais gerais */}
      <div className="mt-8 p-4 border rounded-lg bg-gray-50 shadow">
        <h3 className="font-bold text-green-700 mb-2">Totais do dia</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="border p-2">Calorias</th>
              <th className="border p-2">Proteínas</th>
              <th className="border p-2">Fibras</th>
              <th className="border p-2">Gorduras</th>
              <th className="border p-2">Carboidratos</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold">
              <td className="border p-2">{total.calorias}</td>
              <td className="border p-2">{total.proteinas}</td>
              <td className="border p-2">{total.fibras}</td>
              <td className="border p-2">{total.gorduras}</td>
              <td className="border p-2">{total.carboidratos}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
