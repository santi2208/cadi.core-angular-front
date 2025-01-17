import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  uploadFile(file: File, period: string): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/Import/ImportMovementFile`;
    const formData = new FormData();
    formData.append("file", file);
    // Construimos el query string con HttpParams
    const params = new HttpParams().set("period", period);

    return this.http.post(apiUrl, formData, { params });
  }
}
