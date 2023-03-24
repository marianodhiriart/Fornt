import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../Servicios/ejemplo.service';
@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

//esto es para traer distintos datos
  trabajos : any = [];

  //otro
  nombre : string = '';


constructor(private datos: EjemploService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      this.trabajos = data.trabajos;
      this.nombre = data.nombre;
    })
  }
  }


