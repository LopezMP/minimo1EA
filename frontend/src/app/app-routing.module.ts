import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{SeguimientoComponent} from './seguimiento/seguimiento.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/institution' },
  { path: 'seguimiento', component: SeguimientoComponent},
  { path: '**', component: SeguimientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
