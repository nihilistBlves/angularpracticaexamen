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
  public selectedFile!: File;
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

  changeFile(event: any) {
    this.selectedFile = event.target.files[0];
  }

  crearJugador(): void {
    //console.log(this.selectedFile);
    // this._serviceFileUpload.uploadFile(file).subscribe(response => {
    //   console.log("OK");
    // });
  }

  subirFoto(): void {
    this._serviceFileUpload.uploadFile(this.selectedFile).subscribe(response => {
      console.log("ok");
    });
  }
}
