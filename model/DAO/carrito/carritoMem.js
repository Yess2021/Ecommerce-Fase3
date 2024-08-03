class ModelMem {

    constructor() {
        this.carritos = []
    }
    
    guardarCarrito = async carrito => {
        carrito.id = String(+(this.carritos[this.carritos.length - 1]?.id || 0) + 1)

        this.carritos.push(carrito)
        return carrito
    }
}

export default ModelMem