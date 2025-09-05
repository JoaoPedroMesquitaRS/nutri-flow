import { useContext } from "react";
import { PesoContext } from "../context/PesoContext.jsx";

export default function FatorAtividade(){

    const { fatorAtividade, setFatorAtividade } = useContext(PesoContext);

    return(
        <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">

            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">
                2. Fator de Atividade
            </h1>

            <div className="flex gap-5">
                <div className="grid grid-cols-3 gap-4 w-full">
                
                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="fatorAtividade"
                            value="1.2"
                            checked={fatorAtividade === "1.2"}
                            onChange={(e) => setFatorAtividade(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Sedentário (quase nada de exercício)</label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="fatorAtividade"
                            value="1.375"
                            checked={fatorAtividade === "1.375"}
                            onChange={(e) => setFatorAtividade(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Levemente ativo (exercício 1-3 dias)</label>
                    </div>
                    
                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="fatorAtividade"
                            value="1.55"    
                            checked={fatorAtividade === "1.55"}
                            onChange={(e) => setFatorAtividade(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Moderadamente ativo (3-5 dias/semana)</label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="fatorAtividade"
                            value="1.725"    
                            checked={fatorAtividade === "1.725"}
                            onChange={(e) => setFatorAtividade(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Muito ativo (6-7 dias/semana)</label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input 
                            type="radio" 
                            name="fatorAtividade" 
                            value="1,9"    
                            checked={fatorAtividade === "1,9"}
                            onChange={(e) => setFatorAtividade(e.target.value)}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Extremamente ativo (trabalho físico)</label>
                    </div>

                </div>

                
            </div>

        </div>
    )
}