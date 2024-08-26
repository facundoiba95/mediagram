
export const getStreaming = async (req,res) => {
    try {
        return res.send("holis");
    } catch (error) {
        console.error("Ocurrio un error al obtener el stream. Error: ", error);
        res.status(500).json({error})
    }
}