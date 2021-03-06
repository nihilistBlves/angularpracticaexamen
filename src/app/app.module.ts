import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { VerapuestasComponent } from './components/verapuestas/verapuestas.component';
import { CrearapuestaComponent } from './components/crearapuesta/crearapuesta.component';
import { DetallesequipoComponent } from './components/detallesequipo/detallesequipo.component';
import { JugadoresequipoComponent } from './components/jugadoresequipo/jugadoresequipo.component';
import { DetallesjugadorComponent } from './components/detallesjugador/detallesjugador.component';
import { appRoutingProviders, routing } from './app.routing';
import { EquiposService } from './services/equipos.service';
import { JugadoresService } from './services/jugadores.service';
import { ApuestasService } from './services/apuestas.service';
import { CrearjugadorComponent } from './components/crearjugador/crearjugador.component';
import { FileUploadService } from './services/fileupload.service';
import { BuscarJugadorComponent } from './components/buscar-jugador/buscar-jugador.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    VerapuestasComponent,
    CrearapuestaComponent,
    DetallesequipoComponent,
    JugadoresequipoComponent,
    DetallesjugadorComponent,
    CrearjugadorComponent,
    BuscarJugadorComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders, EquiposService, JugadoresService, ApuestasService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
