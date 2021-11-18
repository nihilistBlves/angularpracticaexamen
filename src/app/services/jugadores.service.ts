import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { Jugador } from "../models/jugador";

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

    getJugadoresByQuery(str: string): Observable<any> {
        var request = "api/Jugadores/BuscarJugadores/" + str;
        var url = Global.url2 + request;
        return this._http.get(url);
    }

    postJugador(jugador: Jugador): Observable<any> {
        var request = "api/jugadores";
        var url = Global.url2 + request;
        var json = JSON.stringify(jugador);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(url, json, {headers: header});
    }
}