import { ArrowRightCircleIcon } from "lucide-react";
import { useEffect, useState } from "react"
import DetalheDietaPage from "./DetalhesDietaPage";

export default function DietasPage(){
    
    const [ dietas, setDietas ] = useState([]);

    const [ dietaSelecionada, setDietaSelecionada ] = useState(null);

    const [ mostrarModal, setMostrarModal ] = useState(false);
    const abrirModal = () => setMostrarModal(true);
    const fecharModal = () => setMostrarModal(false);
    
    useEffect(() => {

        async function getDietas() {
            const response = await fetch('http://localhost:3001/dietas').then(res => (res.json()));
            setDietas(response);
            console.log(response)
        }

        getDietas();
    }, [])

    return(
        <div className="p-6 flex flex-col gap-5">
            <div className="">
                <h2 className="text-2xl font-bold">Dietas</h2>
            </div>

            <div>

                <table className="min-w-full bg-white border border-gray-300 shadow rounded">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Nome</th>
                            <th className="px-4 py-2 border">Peso (kg)</th>
                            <th className="px-4 py-2 border">Idade</th>
                            <th className="px-4 py-2 border">Sexo</th>
                            <th className="px-4 py-2 border">Ação</th>
                        </tr>
                    </thead>
                    
                    <tbody>

                    {dietas && dietas.map((item, index) => {
                        return(
                            <tr key={index} className="text-center">
                                <td className="border px-4 py-2">{item.pesagem.nome}</td>
                                <td className="border px-4 py-2">{item.pesagem.peso}</td>
                                <td className="border px-4 py-2">{item.pesagem.idade}</td>
                                <td className="border px-4 py-2">{item.pesagem.sexo}</td>
                                <td className="border px-4 py-2 justify-center flex">
                                    <ArrowRightCircleIcon 
                                        className="cursor-pointer" 
                                        onClick={() => {
                                            abrirModal();
                                            setDietaSelecionada(item);
                                        }}
                                    />
                                </td>
                            </tr>
                        )
                    })}

                  
                    </tbody>
                </table>
                    {mostrarModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            
                            {/* Fundo escuro */}
                            <div
                                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                                onClick={fecharModal}
                            ></div>

                            {/* Conteúdo do modal */}
                            <div className="relative z-10 bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-4 max-h-screen overflow-y-auto p-6">
                                <DetalheDietaPage dieta={dietaSelecionada} /> 
                            </div>

                        </div>
                    )}
            </div>

        </div>
    )
}