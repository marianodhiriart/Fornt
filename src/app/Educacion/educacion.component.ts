import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../Servicios/ejemplo.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class educacionComponent implements OnInit {
//esto es para traer distintos datos
educacion : any = [];

//otro
nombre : string = '';


  constructor(private datos: EjemploService) { }

  ngOnInit(): void {

    this.datos.getDatos().subscribe(data =>{
      this.educacion = data.trabajos;
      this.nombre = data.nombre;
    })
  }

}

