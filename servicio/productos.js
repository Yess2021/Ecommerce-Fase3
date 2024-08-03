import ModelFactory from '../model/DAO/productos/productosFactory.js'
import config from '../config.js'

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async () => {
        return await this.model.obtenerProductos()
    }

    obtenerProducto = async id => {
        return await this.model.obtenerProducto(id)
    }

    guardarProducto = async producto => {
        const productoGuardado = await this.model.guardarProducto(producto)
        return productoGuardado
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProducto(id,producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.model.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio