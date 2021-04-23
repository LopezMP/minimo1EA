import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {SeguimientoService} from './../services/seguimiento.service';
import{ Seguimiento} from '../model/seguimiento'
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  seguimientos: Seguimiento[];
  
  constructor(public seguimientoService: SeguimientoService,) { }

  ngOnInit(): void {
    this.getSeguimientos();
  }

  getSeguimientos(){
    this.seguimientoService.getSeguimientos().subscribe( seguimientos => {
      this.seguimientos = seguimientos;
      console.log("EO: " + seguimientos.toString());
    });
  }

  createSeguimiento(form?: NgForm){
    this.seguimientoService.createSeguimiento(form.value)
      .subscribe(res => {
        //after we have created a new user we order all users with our function
        console.log("creado correctamente")
        this.getSeguimientos();
        form.reset();
      });
  }


}
