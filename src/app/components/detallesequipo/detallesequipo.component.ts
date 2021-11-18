import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-detallesequipo',
  templateUrl: './detallesequipo.component.html',
  styleUrls: ['./detallesequipo.component.css']
})
export class DetallesequipoComponent implements OnInit {
  public equipo!: Equipo;

  constructor(
    private _service: EquiposService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._service.getEquipoById(params['idEquipo']).subscribe(response => {
        this.equipo = response;
      });
    });
  }

}
