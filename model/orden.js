const { model, Schema } = require("mongoose");

const OrdenSchema = new Schema({
    fecha:{type:String, required:true},
    hora:{type:String, required:true},
    estado:{type:String, required:true},
    largo:{type:Number, required:true},
    largoDos:{type:Number, required:true},
    alto:{type:Number, required:true},
    peso:{type:Number, required:true},
    direccionRecogida:{type:String, required:true},
    ciudadRecogida:{type:String, required:true},
    nombreDestinatario:{type:String, required:true},
    cedulaNitDestinatario:{type:Number, required:true},
    direccionEntrega:{type:String, required:true},
    ciudadEntrega:{type:String, required:true},    
    });
module.exports = model("Orden",OrdenSchema);
