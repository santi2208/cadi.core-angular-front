import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Batch } from "app/dtos/batches.interfaces";

@Injectable({
  providedIn: "root",
})
export class BatchService {
  constructor(private http: HttpClient) {}
  approve(batchId: number): Observable<any> {
    let apiUrl = `http://localhost:5179/api/Batch/Approve?batchId=${batchId}`;
    return this.http.post(apiUrl, null);
  }

  getAll(): Observable<Batch[]> {
    let apiUrl = `http://localhost:5179/api/Batch`;
    return this.http.get<Batch[]>(apiUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
