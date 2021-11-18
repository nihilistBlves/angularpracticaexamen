import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FileUploadService {

    appUrl = "http://localhost:4200/";

    constructor(
    ) {}

    upload(file: File): Observable<any> {
    }
    
}