import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Apuesta } from 'src/app/models/apuesta';
import { ApuestasService } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-crearapuesta',
  templateUrl: './crearapuesta.component.html',
  styleUrls: ['./crearapuesta.component.css']
})
export class CrearapuestaComponent implements OnInit {
  @ViewChild('cajausuario') cajausuario!: ElementRef;
  @ViewChild('cajaresultado') cajaresultado!: ElementRef;
  @ViewChild('cajafecha') cajafecha!: ElementRef;

  constructor(
    private _service: ApuestasService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearApuesta(): void {
    var usuario = this.cajausuario.nativeElement.value;
    var resultado = this.cajaresultado.nativeElement.value;
    var fecha = this.cajafecha.nativeElement.value;
    var apuesta = new Apuesta(0, usuario, resultado, fecha);
    this._service.postApuesta(apuesta).subscribe(response => {
      this._router.navigate(['/apuestas']);
    });
  }

}
