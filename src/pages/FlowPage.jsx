import { useState } from "react"
import { PesoContext } from "../context/PesoContext.jsx";

import CaloriasManutencao from "../components/CaloriasManutencao.jsx"
import FatorAtividade from "../components/FatorAtividade.jsx"
import MedidasCorporais from "../components/MedidasCorporais.jsx"
import Objetivo from "../components/Objetivo.jsx"
import Patologias from "../components/Patologias.jsx"
import Pesagem from "../components/Pesagem.jsx"
import TotalCalorias from "../components/TotalCalorias.jsx"
import Dieta from "../components/Dieta.jsx";

export default function FlowTeste(){

    const [ fatorAtividade, setFatorAtividade ] = useState('');

    const [ pesagem, setPesagem ] = useState({
        nome: "", peso: "", altura: "", idade: "", sexo: ""
    });

    const [ objetivo, setObjetivo ] = useState('');
    const [ objetivoCalorias, setObjetivoCalorias ] = useState('');
    const [ get, setGet ] = useState(null);
    const [ patologias, setPatologias ] = useState([]);
    const [ selectedFoods, setSelectedFoods ] = useState([]);
    const [ medidasCorporais, setMedidasCorporais ] = useState({
        torax: "", braco: "", perna: "", barriga: ""
    });
 
    async function criarDieta() {

        const body = {
            pesagem, fatorAtividade, get, objetivo, selectedFoods, objetivoCalorias, patologias, medidasCorporais
        };
        console.log(pesagem);

        try{
            const response = await fetch('http://localhost:3001/dietas',{
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(body)
            });

            const data = await response.json();
            console.log(data)
        } catch(err){
            console.error('Erro', err)
        }
    }

    return(
        <PesoContext.Provider value={{ pesagem, setPesagem, fatorAtividade, setFatorAtividade, objetivo, setObjetivo, get, setGet, selectedFoods, setSelectedFoods, objetivoCalorias, setObjetivoCalorias, patologias, setPatologias, medidasCorporais, setMedidasCorporais }}>
            {/* <div className="flex-col w-full items-center place-items-center"> */}
            <div className="flex-col w-full items-center place-items-center p-12">

                <Pesagem />
                <FatorAtividade />
                <CaloriasManutencao />
                <MedidasCorporais />
                <Patologias />
                <Objetivo />
                <Dieta />
                {/* <TotalCalorias /> */}

                <div className="flex flex-col items-center w-full mb-5">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors"
                        onClick={() => criarDieta()}
                    >
                        Salvar
                    </button>
                </div>

            </div>
        </PesoContext.Provider>
    )
}