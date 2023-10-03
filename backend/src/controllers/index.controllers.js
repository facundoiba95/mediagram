export const indexRoute = async ( req, res ) => {
    try {
        res.status(200).json({
            author:'Facundo Ibañez Gambarte',
            version:'1.0.0',
            description: 'API de Mediagram'
        })
    } catch (error) {
        console.error('Ocurrio un error en ruta inicial "/"', error);
        res.status(500).json({error});
    }
}