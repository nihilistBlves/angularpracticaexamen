import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(
    private _service: EquiposService
  ) {}

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    });
  }

}
