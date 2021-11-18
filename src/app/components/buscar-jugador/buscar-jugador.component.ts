import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-buscar-jugador',
  templateUrl: './buscar-jugador.component.html',
  styleUrls: ['./buscar-jugador.component.css']
})
export class BuscarJugadorComponent implements OnInit {
  public jugadores!: Array<Jugador>;

  constructor(
    private _service: JugadoresService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._service.getJugadoresByQuery(params['busqueda']).subscribe(response => {
        this.jugadores = response;
      });
    });
  }

}
