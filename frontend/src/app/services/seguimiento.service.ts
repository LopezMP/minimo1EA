import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import{Seguimiento} from '../model/seguimiento';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  selectedSeguimiento: Seguimiento;

  constructor(private http: HttpClient) { 
    this.selectedSeguimiento=new Seguimiento();
  }

  getSeguimientos(){
    return this.http.get<Seguimiento[]>(environment.apiURL + '/seguimiento/all');
  }
  createSeguimiento(seguimiento: any){
    return this.http.post(environment.apiURL + '/seguimiento/create', seguimiento);
  }

  deleteSeguimiento(id: string){
    return this.http.delete(environment.apiURL + '/seguimiento/' + id)
  }

}
