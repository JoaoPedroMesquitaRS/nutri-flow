import { useContext, useEffect, useState } from "react"
import { PesoContext } from "../context/PesoContext"

export default function CaloriasManutencao(){

    const { pesagem, fatorAtividade, get, setGet } = useContext(PesoContext);
    const resultadoPeso = 10 * (pesagem.peso || 0);
    const resultadoAltura = 6.25 * (pesagem.altura || 0);
    const resultadoIdade = 5 * (pesagem.idade || 0);
    const resultadoSexo = pesagem.sexo === 'M' ? 5 : -161;


    useEffect(() => {
        const resultado = (resultadoPeso + resultadoAltura - resultadoIdade + resultadoSexo) * fatorAtividade;
        setGet(resultado);
    }, [fatorAtividade, resultadoAltura, resultadoIdade, resultadoPeso, resultadoSexo]);

    return(
        <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">

            <div className=" border-b pb-2">
                {/* Fórmula de Mifflin-St Jeor */}
                <h1 className="text-xl font-semibold text-gray-800">
                    3. Calcular Calorias de Manutenção
                </h1>
                <h3 className="text-sm font-light"> 
                    TMB = (10 X peso em kg) + (6,25 X altura em cm) - (5 X idade em anos) + 5 (M) ou - 161 (F)
                </h3>
            </div>

            <div className="flex flex-col gap-5">

                <div className="flex gap-3 justify-center">
                    {/* Cálculo * fator */}
                    <span>Gasto Energético Total (GET) =</span>
                    <input 
                        type="text" 
                        value={get}
                        onChange={(e) => setGet(e.target.value)}
                    />
                </div>
            </div>

        </div>
    )
}