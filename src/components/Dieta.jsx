import { useContext, useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PesoContext } from "../context/PesoContext";

export default function Dieta() {
    const [openMeal, setOpenMeal] = useState(null);

    const { selectedFoods, setSelectedFoods } = useContext(PesoContext);

    const totais = selectedFoods.reduce(
        (acc, alimento) => {
            acc.calorias += alimento.calorias || 0;
            acc.proteinas += alimento.proteinas || 0;
            acc.fibras += alimento.fibras || 0;
            acc.gorduras += alimento.gorduras || 0;
            acc.carboidratos += alimento.carboidratos || 0;
            return acc;
        },
        { calorias: 0, proteinas: 0, fibras: 0, gorduras: 0, carboidratos: 0 } 
    );

    useEffect(() => {
        console.log(selectedFoods)
    }, [selectedFoods])

    const toggleFood = (food) => {
        const alreadySelected = selectedFoods.find((f) => f.name === food.name);

        if (alreadySelected) {
            setSelectedFoods(selectedFoods.filter((f) => f.name !== food.name));
        } else {
            setSelectedFoods([...selectedFoods, food]);
        }
    };

  const meals = [
    {
      name: "Café da Manhã",
      foods: [
        { name: "Pão Francês (1 unidade - 50g)", calorias: 135, proteinas: 4.3, fibras: 1.2, gorduras: 0.7, carboidratos: 27.5, idMeal: 1 },
        { name: "Ovo Cozido (2 unidade - 100g)", calorias: 156, proteinas: 12.6, fibras: 0, gorduras: 10.6, carboidratos: 1.2, idMeal: 1 },
        { name: "Queijo Minas Frescal (fatia 30g)", calorias: 70, proteinas: 5.5, fibras: 0, gorduras: 4.8, carboidratos: 1.2 , idMeal: 1 },
        { name: "Mamão Papaia (100g)", calorias: 43, proteinas: 0.5, fibras: 1.7, gorduras: 0.2, carboidratos: 11.0, idMeal: 1 },
        { name: "Iogurte Natural Integral (1 pote - 170g)", calorias: 104, proteinas: 6.0, fibras: 0, gorduras: 5.3, carboidratos: 8.2, idMeal: 1 },
        { name: "Aveia em Flocos (30g)", calorias: 117, proteinas: 4.1, fibras: 3.0, gorduras: 2.4, carboidratos: 19.6, idMeal: 1 },
        { name: "Leite Integral (1 copo - 200ml)", calorias: 124, proteinas: 6.0, fibras: 0, gorduras: 6.6, carboidratos: 9.6, mealId: 1 },
        { name: "Café Preto (1 xícara - 50ml)", calorias: 2, proteinas: 0.3, fibras: 0, gorduras: 0, carboidratos: 0.3, idMeal: 1 },
      ],
    },
    {
      name: "Almoço",
      foods: [
        { name: "Arroz Branco Cozido (100g)", calorias: 130, proteinas: 2.5, fibras: 0.5, gorduras: 0.2, carboidratos: 28.0, idMeal: 2 },
        { name: "Feijão Preto Cozido (100g)", calorias: 77, proteinas: 4.5, fibras: 8.4, gorduras: 0.5, carboidratos: 14.0, idMeal: 2 },
        { name: "Filé de Frango Grelhado (150g)", calorias: 247.5, proteinas: 46.5, fibras: 0, gorduras: 5.4, carboidratos: 0.0, idMeal: 2 },
        { name: "Carne Bovina Magra Grelhada (100g)", calorias: 250, proteinas: 26.0, fibras: 0, gorduras: 15.0, carboidratos: 0.0, idMeal: 2 },
        { name: "Salmão Grelhado (100g)", calorias: 208, proteinas: 20.0, fibras: 0, gorduras: 13.0, carboidratos: 0.0, idMeal: 2 },
        { name: "Purê de Batata (100g)", calorias: 83, proteinas: 1.7, fibras: 1.2, gorduras: 0.1, carboidratos: 19.0, idMeal: 2 },
        { name: "Brócolis Cozido no Vapor (100g)", calorias: 35, proteinas: 2.4, fibras: 3.3, gorduras: 0.4, carboidratos: 7.2, idMeal: 2 },
        { name: "Alface (20g)", calorias: 3, proteinas: 0.3, fibras: 0.3, gorduras: 0.0, carboidratos: 0.6, idMeal: 2 },
        { name: "Tomate Cru (50g)", calorias: 9, proteinas: 0.4, fibras: 0.5, gorduras: 0.1, carboidratos: 2.0, idMeal: 2 },
        { name: "Azeite de Oliva (1 colher de sopa - 15ml)", calorias: 119, proteinas: 0.0, fibras: 0.0, gorduras: 13.5, carboidratos: 0.0, idMeal: 2 },
      ],
    },
    {
      name: "Café da Tarde",
      foods: [
        { name: "Pão Integral (2 fatia - 60g)", calorias: 148, proteinas: 6.4, fibras: 3.2, gorduras: 2.0, carboidratos: 25.0, idMeal: 3 },
        { name: "Queijo Cottage (30g)", calorias: 27, proteinas: 4.0, fibras: 0, gorduras: 0.7, carboidratos: 1.0, idMeal: 3 },
        { name: "Banana (1 unidade - 70g)", calorias: 62, proteinas: 0.8, fibras: 1.6, gorduras: 0.2, carboidratos: 16.0, idMeal: 3 },
        { name: "Maçã (1 unidade - 130g)", calorias: 68, proteinas: 0.2, fibras: 2.4, gorduras: 0.2, carboidratos: 18.0, idMeal: 3 },
        { name: "Tapioca (1 unidade - 50g)", calorias: 130, proteinas: 0.0, fibras: 0.0, gorduras: 0.0, carboidratos: 32.0, idMeal: 3 },
        { name: "Requeijão Light (1 colher de chá - 10g)", calorias: 26, proteinas: 1.3, fibras: 0, gorduras: 1.8, carboidratos: 0.8, idMeal: 3 },
        { name: "Suco de Laranja Natural (1 copo - 200ml)", calorias: 90, proteinas: 1.4, fibras: 0.4, gorduras: 0.2, carboidratos: 20.8, idMeal: 3 },
        { name: "Mix de Castanhas (30g)", calorias: 185, proteinas: 5.0, fibras: 2.5, gorduras: 17.0, carboidratos: 5.0, idMeal: 3 },
      ],
    },
    {
      name: "Jantar",
      foods: [
        { name: "Sopa de Legumes (1 concha - 200g)", calorias: 80, proteinas: 2.5, fibras: 3.0, gorduras: 1.0, carboidratos: 15.0, idMeal: 4 },
        { name: "Omelete de 2 Ovos (100g)", calorias: 180, proteinas: 12.0, fibras: 0.0, gorduras: 14.0, carboidratos: 1.0, idMeal: 4 },
        { name: "Lasanha de Berinjela (100g)", calorias: 120, proteinas: 6.0, fibras: 3.0, gorduras: 7.0, carboidratos: 10.0, idMeal: 4 },
        { name: "Peixe Assado (100g)", calorias: 170, proteinas: 25.0, fibras: 0.0, gorduras: 7.5, carboidratos: 0.0, idMeal: 4 },
        { name: "Abobrinha Grelhada (100g)", calorias: 17, proteinas: 1.2, fibras: 1.1, gorduras: 0.3, carboidratos: 3.1, idMeal: 4 },
        { name: "Quinoa Cozida (100g)", calorias: 120, proteinas: 4.4, fibras: 2.8, gorduras: 1.9, carboidratos: 21.3, idMeal: 4 },
        { name: "Frango Desfiado (100g)", calorias: 165, proteinas: 31.0, fibras: 0.0, gorduras: 3.6, carboidratos: 0.0, idMeal: 4 },
        { name: "Cenoura Cozida (100g)", calorias: 35, proteinas: 0.8, fibras: 2.6, gorduras: 0.2, carboidratos: 8.2, idMeal: 4 },
      ],
    },
  ];

  const toggleMeal = (mealName) => {
    setOpenMeal(openMeal === mealName ? null : mealName);
  };

  return (
    <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">
      <h1 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
        7. Plano Alimentar
      </h1>

      <div className="flex flex-col gap-4">
        {meals.map((meal) => (
          <div
            key={meal.name}
            className="border rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleMeal(meal.name)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-medium text-gray-700">{meal.name}</span>
              {openMeal === meal.name ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {openMeal === meal.name && (    
                <div>
                    <div className="p-4 bg-white grid grid-cols-3 gap-3">
                        {meal.foods.map((food) => {
                            const isSelected = selectedFoods.some((f) => f.name === food.name);
                            return(
                                <button
                                    key={food.name}
                                    onClick={() => toggleFood(food)}
                                    className={`flex flex-col justify-between gap-3 items-center border rounded-lg p-3 transition
                                        ${isSelected ? "bg-green-200 border-green-500" : "hover:bg-gray-50"}
                                    `}
                                >
                                    <span className="text-gray-700 font-medium">
                                        {food.name}
                                    </span>
                                    <div className="flex gap-3 text-sm text-gray-500">
                                        <span className="text-xs">🔥 {food.calorias} kcal</span>
                                        <span className="text-xs">🥩 {food.proteinas}g</span>
                                        <span className="text-xs">🌱 {food.fibras}g</span>
                                        <span className="text-xs">🌱 {food.gorduras}g</span>
                                        <span className="text-xs">🌱 {food.carboidratos}g</span>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg ">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                            <tr className="text-left text-gray-700 text-sm font-semibold">
                                <th className="py-3 px-4 border-b">Calorias</th>
                                <th className="py-3 px-4 border-b">Prot.</th>
                                <th className="py-3 px-4 border-b">Vit. Fib.</th>
                                <th className="py-3 px-4 border-b">Gord.</th>
                                <th className="py-3 px-4 border-b">Carbo</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">

                            <tr className="bg-blue-50 animate-fade-in">

                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="number"
                                        name="calorias"
                                        value={totais.calorias}
                                        readOnly
                                        className="w-full px-2 py-1 border rounded bg-gray-100 text-center"
                                    />
                                </td>

                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="number"
                                        name="proteinas"
                                        value={totais.proteinas}
                                        readOnly
                                        className="w-full px-2 py-1 border rounded bg-gray-100 text-center"
                                    />
                                </td>

                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="number"
                                        name="fibras"
                                        value={totais.fibras}
                                        readOnly
                                        className="w-full px-2 py-1 border rounded bg-gray-100 text-center"
                                    />
                                </td>

                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="number"
                                        name="gorduras"
                                        value={totais.gorduras}
                                        readOnly
                                        className="w-full px-2 py-1 border rounded bg-gray-100 text-center"
                                    />
                                </td>

                                <td className="py-2 px-4 border-b">
                                    <input
                                        type="number"
                                        name="carboidratos"
                                        value={totais.carboidratos}
                                        readOnly
                                        className="w-full px-2 py-1 border rounded bg-gray-100 text-center"
                                    />
                                </td>

                            </tr>
                            
                        </tbody>
                    </table>

                </div>
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
}