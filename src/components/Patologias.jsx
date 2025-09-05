import { useContext } from "react";
import { PesoContext } from "../context/PesoContext";

export default function Patologias(){

    const { patologias, setPatologias } = useContext(PesoContext);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setPatologias((prev) => [...prev, value]);
        } else {
            setPatologias((prev) => prev.filter((item) => item !== value));
        }
    };

    return(
        <div className="flex flex-col gap-5 p-6 rounded-2xl shadow-md w-3/4 bg-white">

            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">
                5. Identificar Patologias e Restrições
            </h1>

            <div className="flex gap-5">
                <div className="grid grid-cols-3 w-full gap-5">
                
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            value="Diabetes"
                            checked={patologias.includes("Diabetes")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Diabetes</label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            value="Intolerância a Lactose"
                            checked={patologias.includes("Intolerância a Lactose")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">
                            Intolerância a Lactose
                        </label>
                    </div>
                                    
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            value="Hipertensão"
                            checked={patologias.includes("Hipertensão")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="text-sm font-medium text-gray-600 mb-1">Hipertensão</label>
                        </div>
                    </div>

                </div>

                
            </div>
    )
}