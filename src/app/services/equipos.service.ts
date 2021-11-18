import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class EquiposService {
    constructor(
        private _http: HttpClient,
    ) {}

    getEquipos(): Observable<any> {
        var request = "api/equipos";
        var url = Global.url + request;
        return this._http.get(url);
    }
    
    getEquipoById(id: number): Observable<any> {
        var request = "api/equipos/" + id;
        var url = Global.url + request;
        return this._http.get(url);
    }
}