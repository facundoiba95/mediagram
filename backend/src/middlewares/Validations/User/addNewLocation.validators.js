import Joi from 'joi';

const locationSchema = Joi.object({
    location: Joi.string().required()
})

export default async (req,res,next) => {
    try {
        const { error } = locationSchema.validate(req.body);

        if(error) {
            return await Promise.reject({error: error.details[0].message , status: 500})
        }

        next();
    } catch (error) {
        console.error("Ocurrio un al validar la localidad. En addNewLocation.validators.js. Error: ", error)
        next(error)
    }
}