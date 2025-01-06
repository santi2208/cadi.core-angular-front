import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Period } from "app/dtos/common.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Period[]> {
    let apiUrl = "http://localhost:5179/api/Periods";
    return this.http
      .get<Period[]>(apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
