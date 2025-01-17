import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MovementDto } from "../../dtos/movements.interfaces";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class MovementsService {
  private apiBaseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<MovementDto[]> {
    const apiUrl = `${this.apiBaseUrl}/Movement`;
    return this.http
      .get<MovementDto[]>(apiUrl)
      .pipe(catchError(this.handleError));
  }

  createMovementsFromBatchId(batchId:number): Observable<any>{
    const apiUrl = `${this.apiBaseUrl}/Movement/CreateMovementsFromBatchId?batchId=${batchId}`;
    return this.http.post(apiUrl, null);
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
