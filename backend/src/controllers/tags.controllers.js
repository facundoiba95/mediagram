import Tags from "../models/Tags.js";

export const tagsFound = async (req, res) => {
    try {
        const tagsFound = req.tagsFound;
        
        if (!tagsFound.length){
            console.log('No se encontraron tags');
            return res.status(404).json({ message: 'No se encontraron tags!', status: 404, tags: tagsFound })
        }

        return res.status(200).json({ message: 'Tags encontrados!', status: 200, tags: tagsFound });
    } catch (error) {
        console.error('Ocurrio un error en tagsFound(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}

export const createTag = async (req,res) => {
    try {
        const { tag } = req.body;

        const existTag = await Tags.find({name: tag.trim()});
       
        if(existTag.length) return res.status(409).json({ message: `El tag "${tag}" ya existe!`, status: 409, tags: existTag }); 
       
        const newTag = new Tags({
            name: tag
        });

        await newTag.save();

        res.status(200).json({ message: `El tag "${tag}" ha sido creado!`, status: 200, tags: [newTag]});
    } catch (error) {
        console.error('Ocurrio un error en createTag(). tags.controllers.js', error.message);
        res.status(500).json({ error: error.message, status: 500 });
    }
}