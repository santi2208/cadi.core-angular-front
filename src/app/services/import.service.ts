import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  private baseUrl = 'http://localhost:5000/api/import'; // Reemplaza con la URL base de tu API

  constructor(private http: HttpClient) {}

  /**
   * Sube un archivo CSV al servidor.
   * @param file El archivo que se enviará.
   * @param period El periodo asociado al archivo.
   * @returns Un Observable con la respuesta del servidor.
   */
  importMovementFile(file: File, period: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('period', period);

    const headers = new HttpHeaders(); // Si necesitas autorizaciones, agrégalas aquí.

    return this.http.post(`${this.baseUrl}/ImportMovementFile`, formData, {
      headers,
    });
  }
}
