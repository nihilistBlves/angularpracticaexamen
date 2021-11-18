import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class JugadoresService {
    constructor(
        private _http: HttpClient,
    ) {}

    getJugadoresByEquipo(idEquipo: number): Observable<any> {
        var request = "api/jugadores/jugadoresequipo/" + idEquipo;
        var url = Global.url + request;
        return this._http.get(url);
    }

    getJugadorById(idJugador: number): Observable<any> {
        var request = "api/jugadores/" + idJugador;
        var url = Global.url + request;
        return this._http.get(url);
    }
}