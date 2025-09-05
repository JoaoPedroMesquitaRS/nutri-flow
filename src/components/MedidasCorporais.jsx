import { useContext } from "react"
import { PesoContext } from "../context/PesoContext"

export default function MedidasCorporais(){

    const { medidasCorporais, setMedidasCorporais } = useContext(PesoContext);

    async function handleChange(e) {
        const { name, value } = e.target;
        setMedidasCorporais(prev => ({
            ...prev,
            [name]: value
        }));
    };


    return(
        <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">

            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">
                4. Registrar Medidas Corporais
            </h1>

            <div className="flex gap-5">
                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Tórax</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 72"
                        name="torax"
                        value={medidasCorporais.torax}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Braço</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 180"
                        name="braco"
                        value={medidasCorporais.braco}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Perna</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 24"
                        name="perna"
                        value={medidasCorporais.perna}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-600 mb-1">Barriga</label>
                    <input 
                        type="text" 
                        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
                        placeholder="Ex: 24"
                        name="barriga"
                        value={medidasCorporais.barriga}
                        onChange={handleChange}
                    />
                </div>

            </div>

        </div>
    )
}