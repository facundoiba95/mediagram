import Profession from "../models/Profession.js";

export const getProfessions = async (req, res) => {
    try {
        const foundAllProfessions = await Profession.find();
        return res.status(200).json({ professions: foundAllProfessions, status: 200 });
    } catch (error) {
        console.error("Ocurrio un error al obtener todas las profesiones, en getProfessions. Error: ", error);
        return res.status(500).json({ error })
    }
}

export const getProfessionByID = async (req, res) => {
    try {
        const { idProfession } = req.query;
        const foundProfession = await Profession.findById(idProfession);
        if (!foundProfession) return res.status(404).json({ message: "Profession not found!", status: 404 });

        return res.status(200).json({ profession: foundProfession, status: 200 });
    } catch (error) {
        console.error("Ocurrio un error al obtener la profesion, en getProfessionByID. Error: ", error);
        return res.status(500).json({ error })
    }
}

export const createNewProfession = async (req, res) => {
    try {
        const { name } = req.params;
        
        const newProfession = new Profession({
            name
        })
        
        await newProfession.save();
        
        return res.status(200).json({ message: `New profession created: "${name}"`, status: 200 });
    } catch (error) {
        console.error("Ocurrio un error al crear nueva profesion, en createNewProfession. Error: ", error);
        
        if(error.code === 11000) {
            return res.status(409).json({message: `La profesion "${error.keyValue.name}" ya existe!`, status: 409})
        } else {
            return res.status(500).json({ error })
        }
    }
}