import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {
    
    guardarCarrito = async carrito => {
        if(!CnxMongoDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        await CnxMongoDB.db.collection('carritos').insertOne(carrito)
        return carrito
    }
}

export default ModelMongoDB