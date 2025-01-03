import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private readonly apiUrl =
    "http://localhost:5179/api/Import/ImportMovementFile";

  constructor(private http: HttpClient) {}

  uploadFile(file: File, period: string): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    // Construimos el query string con HttpParams
    const params = new HttpParams().set("period", period);

    return this.http.post(this.apiUrl, formData, { params });
  }
}
