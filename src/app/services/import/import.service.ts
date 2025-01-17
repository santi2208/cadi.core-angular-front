import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  // private baseUrl = 'http://localhost:5000/api/import'; 
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Sube un archivo CSV al servidor.
   * @param file El archivo que se enviará.
   * @param period El periodo asociado al archivo.
   * @returns Un Observable con la respuesta del servidor.
   */
  importMovementFile(file: File, period: string): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/import/ImportMovementFile`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('period', period);

    const headers = new HttpHeaders(); // Si necesitas autorizaciones, agrégalas aquí.

    return this.http.post(apiUrl, formData, {
      headers,
    });
  }
}
