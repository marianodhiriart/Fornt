import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoArgentinaComponent } from './logo-argentina/logo-argentina.component';
import { InicioComponent } from './inicio/inicio.component';
import { FotoperfilComponent } from './fotoperfil/fotoperfil/fotoperfil.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { educacionComponent } from './Educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({


  declarations: [
    AppComponent,
    LogoArgentinaComponent,
    InicioComponent,
    FotoperfilComponent,
    HabilidadesComponent,
    TrabajosComponent,
    educacionComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [BrowserModule,
          AppRoutingModule,
          HttpClientModule,
           FormsModule,
          ReactiveFormsModule,
           
      ],

     providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
