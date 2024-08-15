import mongoose from "mongoose";

// @params fields = Array req.body.field
export default (fields) => {
    return (req, res, next) => {
        try {
            fields.forEach(field => {
                req.body[field] = new mongoose.Types.ObjectId(req.body[field]);
                req.params[field] = new mongoose.Types.ObjectId(req.params[field]);
            });
            next()
        } catch (error) {
            return Promise.reject({ error: `${fields} no es valido para convertir a ObjectId.` })
        }
    }
}

