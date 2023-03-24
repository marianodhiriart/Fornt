import { Component, OnInit } from '@angular/core';

// importamos las librerias de formulario que vamos a necesitar

import { FormBuilder, FormGroup, Validators } from
'@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
form: FormGroup;
  constructor(private formBuilder: FormBuilder){ 
    //creamos grupo de control para formulario de inicio
  
  this.form= this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]]

  })
  }
  ngOnInit() {}
 //metodos a partir de ahora
 //toma datos password
  get Password(){
return this.form.get("password");
}

//toma datos mail
get Mail(){
return this.form.get("email");
}

//metodo de validacion de password
get PasswordValid(){
return this.Password?.touched && !this.Password?.valid;
//metodo de validacion de mail
}
get MailValid () {
  return this.Mail?.touched && !this.Password?.valid;
}
onEnviar(event: Event) {
  //Detenemos La propagación o ejecucin del compotamiento submit de un form
  event.preventDefault ;
if (this.form.valid) {
   //Llananos a nuestro servicio para enviar los datos al servidor
  // También podriamos ejecutar alguna Lógica extra
  alert("Todo salio bien ¡Enviar formuario!")
  }else{
  // Correnos todas las validaciones para que se ejecuten los nensajes de error en el template
  this.form.markAllAsTouched();
  alert("Todo salio mal ¡No Enviar formuario!")
  }


}

  }
