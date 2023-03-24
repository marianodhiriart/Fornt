import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { educacionComponent } from './Educacion/educacion.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
{path:'trabajos' , component: TrabajosComponent},
{path: 'educacion' , component: educacionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
