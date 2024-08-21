import pkg from '../../package.json' assert {type: "json"};

export const indexRoute = async ( req, res ) => {
    try {
        res.status(200).json({
            name: "API Mediagram",
            author:'Facundo Ibañez Gambarte',
            version:'1.0.0',
            description: 'API para la gestion de contenido de proyecto Mediagram',
            documentacion: "https://documenter.getpostman.com/view/25549998/2sAXjDcuiZ",
            urlBase: "https://mediagram-backend.onrender.com/",
            dependencies: pkg.dependencies
        })
    } catch (error) {
        console.error('Ocurrio un error en ruta inicial "/"', error);
        res.status(500).json({error});
    }
}