import { useContext, useEffect } from "react"
import { PesoContext } from "../context/PesoContext.jsx"

export default function Objetivo(){

    const { objetivo, setObjetivo, get  } = useContext(PesoContext);
    const { objetivoCalorias, setObjetivoCalorias } = useContext(PesoContext);

    useEffect(() => {
        setObjetivoCalorias(get * objetivo);
    }, [get, objetivo, setObjetivoCalorias])

    return(
        <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">

            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">
                6. Definir Objetivo
            </h1>

            {/* 
            
                GET = TMB X fatorAtividade
                
                🔻 Perder gordura → déficit de 15–25% do GET
                    calorias = GET X 0.75 a 0.85

                🔺 Ganhar massa muscular → superávit de 10–20% do GET
                    calorias = GET X 1.1 a 1.2

                ⚖️ Manter peso → calorias ≈ GET

            */}

            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-3 w-full gap-5">
                
                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="objetivo" 
                            value='0.80'
                            checked={objetivo === '0.80'}
                            onChange={(e) => setObjetivo(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Perder gordura (défict calórico)</label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="objetivo" 
                            value='1.15'
                            checked={objetivo === '1.15'}
                            onChange={(e) => setObjetivo(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Ganhar massa (superávit calórico)</label>
                    </div>
                    
                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="objetivo" 
                            value='1'
                            checked={objetivo === '1'}
                            onChange={(e) => setObjetivo(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Manter (caloritas de manutenção)</label>
                    </div>

                </div>

                <div className="flex gap-3">
                    <span>Objetivos de Calorias:</span>
                    <span>{objetivoCalorias}</span>
                </div>
                
            </div>

        </div>
    )
}