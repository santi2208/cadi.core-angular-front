import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AccountPeriodBalanceDto } from "../../dtos/accounts.interfaces";

@Injectable({
  providedIn: "root",
})
export class AccountPeriodBalanceService {
  private apiUrl = "http://localhost:5179/api/AccountPeriodBalance";
  constructor(private http: HttpClient) {}
  getAll(): Observable<AccountPeriodBalanceDto[]> {
    return this.http
      .get<AccountPeriodBalanceDto[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
