import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import{Seguimiento} from '../model/seguimiento';
import{SeguimientoService} from './../services/seguimiento.service';

@Component({
  selector: 'app-seguimiento-card',
  templateUrl: './seguimiento-card.component.html',
  styleUrls: ['./seguimiento-card.component.css']
})
export class SeguimientoCardComponent implements OnInit {

  @Input()
  seguimiento: Seguimiento;
  
  @Input()
  index: number;

  constructor(public seguimeintoService: SeguimientoService, private router: Router) { }

  ngOnInit(): void {
  }
  deleteSeguimiento(_id: string){
    if(confirm('Are you sure you want to delete this?')){
      this.seguimeintoService.deleteSeguimiento(_id).subscribe(res=>{
        this.router.navigateByUrl('..');
      });
    }
  }

}
