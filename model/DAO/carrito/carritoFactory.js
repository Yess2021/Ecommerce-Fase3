import ModelMem from "./carritoMem.js";
import ModelMongoDB from "./carritoMongoDB.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('**** Carrito Persistiendo en Memoria ****')
                return new ModelMem()

            case 'MONGODB':
                console.log('**** Carrito Persistiendo en Database MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Carrito Persistiendo en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory