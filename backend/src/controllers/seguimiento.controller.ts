import { Request, Response} from "express";
import Seguimiento from '../models/seguimiento';

//Return all the seguimiento
const getSeguimientos = async (req: Request, res: Response) => {
    try{
        const results = await Seguimiento.find({});
        console.log(results);
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const createSeguimiento = async (req:Request, res: Response) => {

    console.log(req.body)
    try{
        const newSeguimiento = new Seguimiento({
            nombre: req.body.nombre,
            fecha: req.body.fecha,
            dni: req.body.dni,
            telefono: req.body.telefono,
            fiebre: req.body.fiebre,
            tos: req.body.tos,
            respiracion: req.body.respiracion,
            malestar: req.body.malestar
        });
        //this takes some time!
        await newSeguimiento.save()
        res.status(201).json(newSeguimiento);
    } catch(err) {
        res.status(500).json(err);
    }   
}

const deleteSeguimiento = async(req:Request, res:Response) => {
    console.log(req.params)
    try{
        await Seguimiento.findByIdAndDelete(req.params.id)
        res.status(201).json();
    }catch(err){
        res.status(500).json(err);
    }
}

export default { getSeguimientos, createSeguimiento, deleteSeguimiento}; 