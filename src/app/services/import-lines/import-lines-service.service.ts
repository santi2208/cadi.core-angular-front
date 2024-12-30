import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MovementLineWithStatus } from 'app/dtos/movements.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImportLinesServiceService {
  private apiUrl = `http://localhost:5179/api/Batch/{batchId}}/lines`;
  constructor(private http: HttpClient) { }
  getAllByBatchId(batchId: number): Observable<MovementLineWithStatus[]> {
      return this.http
        .get<MovementLineWithStatus[]>(this.apiUrl)
        .pipe(catchError(this.handleError));
    }
  
    private handleError(error: HttpErrorResponse) {
      console.error("Ocurrió un error:", error);
      return throwError(() =>
        Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
      );
    }
}
