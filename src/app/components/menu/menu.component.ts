import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { EquiposService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;
  @ViewChild('cajabusqueda') cajabusqueda!: ElementRef;

  constructor(
    private _service: EquiposService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      this.equipos = response;
    });
  }

  buscarJugador(): void {
    var str = this.cajabusqueda.nativeElement.value;
    if (str != "") {
      this._router.navigate(['/buscarjugadores', str]);
    } else {
      this.cajabusqueda.nativeElement.placeholder = "Debe ingresar una busqueda";
    }
  }

}
