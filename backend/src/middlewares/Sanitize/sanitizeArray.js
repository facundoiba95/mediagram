// @params fields = Array req.body.field
export default (fields) => {
    return (req, res, next) => {
        try {
            fields.forEach(field => {
                req.body[field] = JSON.parse(req.body[field]);
            });

            next()
        } catch (error) {
            return Promise.reject({error: `${fields} no es valido para convertir a Array.`})
        }
    }
}