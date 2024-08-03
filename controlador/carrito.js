import Servicio from '../servicio/carrito.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    guardarCarrito = async (req, res) => {
        try {
            const carrito = req.body
            if(!Object.keys(carrito).length) throw new Error('ERROR: No puedo guardar un carrito vacío')
            const carritoGuardado = await this.servicio.guardarCarrito(carrito)
            res.json(carritoGuardado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
}

export default Controlador