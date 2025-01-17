import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MovementLineWithStatus } from 'app/dtos/movements.interfaces';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImportLinesServiceService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  getAllByBatchId(batchId: number): Observable<MovementLineWithStatus[]> {
      const apiUrl = `${this.apiBaseUrl}/Batch/${batchId}/lines`;
      return this.http
        .get<MovementLineWithStatus[]>(apiUrl)
        .pipe(catchError(this.handleError));
    }
  
    private handleError(error: HttpErrorResponse) {
      console.error("Ocurrió un error:", error);
      return throwError(() =>
        Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
      );
    }
}
