import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { EquiposService } from 'src/app/services/equipos.service';
import { FileUploadService } from 'src/app/services/fileupload.service';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-crearjugador',
  templateUrl: './crearjugador.component.html',
  styleUrls: ['./crearjugador.component.css']
})
export class CrearjugadorComponent implements OnInit {
  public equipos!: Array<Equipo>;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajaposicion') cajaposicion!: ElementRef;
  @ViewChild('cajaimagen') cajaimagen!: ElementRef;
  @ViewChild('cajafecha') cajafecha!: ElementRef;
  @ViewChild('cajapais') cajapais!: ElementRef;
  @ViewChild('selectequipos') selectequipos!: ElementRef;

  constructor(
    private _serviceEquipos: EquiposService,
    private _servicesJugadores: JugadoresService,
    private _serviceFileUpload: FileUploadService
  ) { }

  ngOnInit(): void {
  }

  crearJugador(): void {

  }

  subirFoto(): void {
    var file = new File(this.cajaimagen.nativeElement.value, )
    this._serviceFileUpload.uploadFile()
  }
}
