import Dieta from "../models/Dieta.js";

export async function salvarDieta(req, res) {
    try{
        const dieta = await Dieta.create(req.body);
        res.status(201).json(dieta);
    } catch(error){
        res.status(401).json({error: error.message})
    }
};

export async function listarDietas(req, res) {
    const dietas = await Dieta.findAll();
    res.json(dietas);
};

export async function listarDietaId(req, res) {
    const { id } = req.params;
    const dieta = await Dieta.findByPk(id);

    if(!dieta) return res.status(404).json({error: 'Dieta não localizada!'});

    res.json(dieta);
};