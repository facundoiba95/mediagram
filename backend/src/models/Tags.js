import { Schema, model } from "mongoose";

const tagsSchema = new Schema({
    name: {
        type: String,
        minLenght: 3,
        validate:
        {
            validator: function (name) {
                return /^[a-zA-Z0-9]+$/.test(name); // Expresión regular para permitir solo letras y números
            },
            message: props => `${props.value} no es un nombre de usuario válido. El nombre de usuario solo puede contener letras y números.`
        }
    }
},
    {
        versionKey: false,
        timestamps: false
    }
)

export default model('Tags', tagsSchema);
