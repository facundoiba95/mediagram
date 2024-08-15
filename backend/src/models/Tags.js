import { Schema, model } from "mongoose";
import { regex_text } from "../libs/regExs.js";

const tagsSchema = new Schema({
    name: {
        type: String,
        minLenght: 3,
        validate:
        {
            validator: function (name) {
                return regex_text.test(name);
            },
            message: props => `${props.value} no es un tag válido. El tag solo puede contener letras, números, puntos y guiones bajos.`
        }
    }
},
    {
        versionKey: false,
        timestamps: false
    }
)

export default model('Tags', tagsSchema);
