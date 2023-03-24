import { Injectable } from '@angular/core';

//suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticionesy CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos
getDatos():Observable<any>{

  //retorna de datos utilizando el metodo get ed Httpclient que llama a la base de datos JSON o a una URL
  return this.http.get ('./assets/db/primer.json');

  //aca podria poner un callback para ser Lo opción de problema de conexión del servidor

}

}
