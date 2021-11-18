import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Jugador } from 'src/app/models/jugador';
import { EquiposService } from 'src/app/services/equipos.service';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadoresequipo',
  templateUrl: './jugadoresequipo.component.html',
  styleUrls: ['./jugadoresequipo.component.css']
})
export class JugadoresequipoComponent implements OnInit {
  public equipo!: Equipo;
  public jugadores!: Array<Jugador>;

  constructor(
    private _serviceEquipos: EquiposService,
    private _serviceJugadores: JugadoresService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEquipo();
    this.getJugadores();
  }

  getEquipo(): void {
    this._route.params.subscribe((params: Params) => {
      this._serviceEquipos.getEquipoById(params['idEquipo']).subscribe(response => {
        this.equipo = response;
      });
    });
  }

  getJugadores(): void {
    this._route.params.subscribe((params: Params) => {
      this._serviceJugadores.getJugadoresByEquipo(params['idEquipo']).subscribe(response => {
        this.jugadores = response;
      })
    });
  }

}
