import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FileUploadService {

    appUrl = "http://localhost:4200/";

    constructor(
        private _http: HttpClient
    ) {}

    uploadFile(file: File): Observable<any> {
        const endpoint = this.appUrl + "assets/images/";
        const formData: FormData = new FormData();
        formData.append("fileKey", file, file.name);
        return this._http.post(endpoint, formData);
    }
    
}