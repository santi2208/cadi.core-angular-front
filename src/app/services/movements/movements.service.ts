import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MovementDto } from "../../dtos/movements.interfaces";
@Injectable({
  providedIn: "root",
})
export class MovementsService {
  private apiUrl = "http://localhost:5179/api/Movement";
  constructor(private http: HttpClient) {}
  getAll(): Observable<MovementDto[]> {
    return this.http
      .get<MovementDto[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
