import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AccountDto } from "app/dtos/accounts.interfaces";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private apiUrl = "http://localhost:5179/api/Account";

  constructor(private http: HttpClient) {}
  getAll(): Observable<AccountDto[]> {
    return this.http
      .get<AccountDto[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
