import ModelFactory from '../model/DAO/carrito/carritoFactory.js'
import config from '../config.js'


class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    guardarCarrito = async carrito => {
        const carritoGuardado = await this.model.guardarCarrito(carrito)
        return carritoGuardado
    }
}

export default Servicio