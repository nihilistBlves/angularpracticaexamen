import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Jugador } from 'src/app/models/jugador';
import { EquiposService } from 'src/app/services/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-detallesjugador',
  templateUrl: './detallesjugador.component.html',
  styleUrls: ['./detallesjugador.component.css']
})
export class DetallesjugadorComponent implements OnInit {
  public equipo!: Equipo;
  public jugador!: Jugador;

  constructor(
    private _serviceJugadores: JugadoresService,
    private _serviceEquipos: EquiposService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEquipo(),
    this.getJugador();
  }

  getEquipo(): void {
    this._route.params.subscribe((params: Params) => {
      this._serviceEquipos.getEquipoById(params['idEquipo']).subscribe(response => {
        this.equipo = response;
      });
    });
  }

  getJugador(): void {
    this._route.params.subscribe((params: Params) => {
      this._serviceJugadores.getJugadorById(params['idJugador']).subscribe(response => {
        this.jugador = response;
      })
    });
  }

}
