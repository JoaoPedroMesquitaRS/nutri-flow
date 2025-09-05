export default function TotalCalorias(){
    return(
        <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-md w-full max-w-xl mx-auto">

            <h1 className="text-xl font-semibold text-gray-800 border-b pb-2">
                8. Total de Calorias (por dia)
            </h1>

            <div className="flex gap-5">
                <div className="flex flex-col w-full gap-5">
                
                    <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg ">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                            <tr className="text-left text-gray-700 text-sm font-semibold">
                                <th className="py-3 px-4 border-b">Carbo</th>
                                <th className="py-3 px-4 border-b">Prot.</th>
                                <th className="py-3 px-4 border-b">Vit. Fib.</th>
                                <th className="py-3 px-4 border-b">Gord.</th>
                                <th className="py-3 px-4 border-b">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            
                            <tr className="bg-blue-50 animate-fade-in">
                                
                                <td className="py-2 px-4 border-b">
                                <input
                                    type="text"
                                    name="carboidtrato"
                                    // value={guiaDigitada.senha}
                                    // onChange={handleChange}
                                    className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                                />
                                </td>

                                <td className="py-2 px-4 border-b">
                                <input
                                    type="text"
                                    name="proteina"
                                    // value={guiaDigitada.validade}
                                    // onChange={handleChange}
                                    className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                                />
                                </td>

                                <td className="py-2 px-4 border-b">
                                <input
                                    type="text"
                                    name="vitaminaFibra"
                                    // value={guiaDigitada.indicacao}
                                    // onChange={handleChange}
                                    className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                                />
                                </td>

                                <td className="py-2 px-4 border-b relative">
                                    <input
                                        type="text"
                                        name="gordura"
                                        // value={busca}
                                        // onChange={keyPress}
                                        className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                                    />
                                </td>

                                <td className="py-2 px-4 border-b relative">
                                    <input
                                        type="text"
                                        name="total"
                                        // value={busca}
                                        // onChange={keyPress}
                                        className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                                    />
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                
            </div>

        </div>
    )
}