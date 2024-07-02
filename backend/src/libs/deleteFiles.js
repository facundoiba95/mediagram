import fs from "fs-extra";

// @params files = [String "path"];
export default async (files) => {
    try {
        for (let i = 0; i < files.length; i++) {
            const element = files[i];
            await fs.unlink(element)
        }
    } catch (error) {
        console.error("Ocurrio un error al eliminar el archivo. Error: ", error);
        return error;
    }
}