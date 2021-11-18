import { Component, OnInit } from '@angular/core';
import { Apuesta } from 'src/app/models/apuesta';
import { ApuestasService } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-verapuestas',
  templateUrl: './verapuestas.component.html',
  styleUrls: ['./verapuestas.component.css']
})
export class VerapuestasComponent implements OnInit {
  public apuestas!: Array<Apuesta>;

  constructor(
    private _service: ApuestasService,
  ) { }

  ngOnInit(): void {
    this._service.getApuestas().subscribe(response => {
      this.apuestas = response;
    });
  }

  getApuestas(): void {
    this._service.getApuestas().subscribe(response => {
      this.apuestas = response;
    });
  }

  eliminarApuesta(idApuesta: number): void {
    this._service.deleteApuesta(idApuesta).subscribe(response => {
      this.getApuestas();
    });
  }

}
