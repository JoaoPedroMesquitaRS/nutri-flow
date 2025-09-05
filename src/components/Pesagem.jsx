import { useContext } from "react"
import { PesoContext } from "../context/PesoContext.jsx";

export default function Pesagem(){

    const { pesagem, setPesagem } = useContext(PesoContext);

    async function handleChange(e) {
        const { name, value } = e.target;
        setPesagem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return(
        <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">

            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">
                1. Pesagem, Altura e Idade
            </h1>

            <div className="grid gap-5">

                <div className="flex flex-col w-full col-span-2">
                    <label className="text-sm font-medium text-gray-600 mb-1">Nome</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Digite..."
                        name="nome"
                        value={pesagem.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Peso (kg)</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 72"
                        name="peso"
                        value={pesagem.peso}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Altura (cm)</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 180"
                        name="altura"
                        value={pesagem.altura}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Idade</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 24"
                        name="idade"
                        value={pesagem.idade}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label className="text-sm font-medium text-gray-600 mb-1">Sexo</label>

                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <input 
                                type="radio" 
                                name="sexo"
                                value="M"
                                checked={pesagem.sexo === 'M'}
                                onChange={handleChange}
                            />
                            <label className="text-sm font-medium text-gray-600 mb-1">M</label>
                        </div>

                        <div className="flex gap-2 items-center">
                            <input 
                                type="radio"
                                name="sexo"
                                value="F"
                                checked={pesagem.sexo === 'F'}
                                onChange={handleChange}    
                            />
                            <label className="text-sm font-medium text-gray-600 mb-1">F</label>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}