// @params fields = Array req.body.field
export default (fields) => {
    return (req, res, next) => {
        try {
            fields.forEach(field => {
                const isBoolean = req.body[field] === "true";
                req.body[field] = isBoolean
            });
            next()
        } catch (error) {
            return Promise.reject({ error: `${fields} no es valido para convertir a Boolean.` })
        }
    }
}

