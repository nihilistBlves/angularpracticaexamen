import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { Apuesta } from "../models/apuesta";

@Injectable()
export class ApuestasService {
    constructor(
        private _http: HttpClient,
    ) {}

    getApuestas(): Observable<any> {
        var request = "api/apuestas";
        var url = Global.url + request;
        return this._http.get(url);
    }

    postApuesta(apuesta: Apuesta): Observable<any> {
        var request = "api/apuestas";
        var url = Global.url + request;
        var json = JSON.stringify(apuesta);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(url, json, {headers: header});
    }

    deleteApuesta(idApuesta: number): Observable<any> {
        var request = "api/apuestas/" + idApuesta;
        var url = Global.url + request;
        return this._http.delete(url);
    }
}