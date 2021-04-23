export class Seguimiento {
    _id: string;
    nombre: string;
    fecha: string;
    dni: string;
    telefono: string;
    fiebre: string;
    tos: string;
    respiracion: string;
    malestar: string;
    constructor(_id="", nombre="", dni="", fecha="", telefono="", fiebre="", tos="", respiracion="", malestar=""){
        this._id=_id;
        this.nombre=nombre;
        this.dni=dni;
        this.fecha=fecha;
        this.telefono=telefono;
        this.fiebre=fiebre;
        this.tos=tos;
        this.respiracion=respiracion;
        this.malestar=malestar;
    }

}