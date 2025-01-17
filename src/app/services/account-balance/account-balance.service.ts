import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AccountBalanceDto } from "app/dtos/accounts.interfaces";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class AccountBalanceService {
  private apiBaseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}
  getAll(): Observable<AccountBalanceDto[]> {
    const apiUrl = `${this.apiBaseUrl}/AccountBalance`;
      return this.http
        .get<AccountBalanceDto[]>(apiUrl)
        .pipe(catchError(this.handleError));
    }
  
    private handleError(error: HttpErrorResponse) {
      console.error("Ocurrió un error:", error);
      return throwError(() =>
        Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
      );
    }
}
//
