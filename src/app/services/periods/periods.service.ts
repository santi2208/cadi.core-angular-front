import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Period } from "app/dtos/common.interfaces";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class PeriodsService {
  private apiBaseUrl = "http://localhost:5179/api/Periods";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getAll(): Observable<Period[]> {
    let apiUrl = "http://localhost:5179/api/Periods";
    return this.http.get<Period[]>(apiUrl).pipe(catchError(this.handleError));
  }

  // closePeriod(periodId: number): Observable<any> {
  //   const apiUrl = `http://localhost:5179/api/Periods/close?periodId=${periodId}`;
  //   return this.http.post(apiUrl, null).pipe(catchError(this.handleError));
  // }

  closePeriod(periodId: number): Observable<any> {
    const apiUrl = `http://localhost:5179/api/Periods/close?periodId=${periodId}`;
    return this.http.post(apiUrl, null).pipe(
      tap(() => {
        this.snackBar.open("Se cerró el período exitosamente.", "Cerrar", {
          duration: 3000,
        });
      }),
      tap(() => console.log(`Cerrando período con ID: ${periodId}`)),
      map(() => true),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
