import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AccountDto } from "app/dtos/accounts.interfaces";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private apiBaseUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient) {}
  getAll(): Observable<AccountDto[]> {
    const apiUrl = `${this.apiBaseUrl}/Account`;
    return this.http
      .get<AccountDto[]>(apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
