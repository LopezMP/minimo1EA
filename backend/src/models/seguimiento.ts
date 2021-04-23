/* nombre, descripcion, url, responsable */
import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const seguimientoSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    },
    fecha: {
        type: String
    },
    dni: {
        type: String
    },
    telefono: {
        type: String
    },
    fiebre: {
        type: String
    },
    tos:{
        type: String
    },
    respiracion: {
        type: String
    },
    malestar: {
        type: String
    }
});

//Interfaz para tratar respuesta como documento
export interface iSeguimiento extends Document {
    nombre: string;
    fecha: string;
    dni: string;
    telefono: string;
    fiebre: string;
    tos: string;
    respiracion: string;
    malestar: string;
        
}

//Exportamos modelo para poder usarlo
export default mongoose.model<iSeguimiento>('Seguimiento', seguimientoSchema);