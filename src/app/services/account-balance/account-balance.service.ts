import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AccountBalanceDto } from "app/dtos/accounts-interfaces";



@Injectable({
  providedIn: "root",
})
export class AccountBalanceService {
  private apiUrl = "http://localhost:5179/api/AccountBalance";

  constructor(private http: HttpClient) {}
  getAll(): Observable<AccountBalanceDto[]> {
      return this.http
        .get<AccountBalanceDto[]>(this.apiUrl)
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
