import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface Period {
  id: number;
  startDate: Date;
  endDate: Date;
  isClosed: boolean;
}

export interface GenericDescriptor {
  id: number;
  description: string;
}

export interface MovementDto {
  id: number;
  amount: number;
  createdDate: Date;
  createdByUser: GenericDescriptor;
  sourceAccount: GenericDescriptor;
  targetAccount: GenericDescriptor;
  period: Period;
}

@Injectable({
  providedIn: "root",
})
export class MovementsService {
  private apiUrl = "http://localhost:5179/api/Movement";
  constructor(private http: HttpClient) {}
  getAllMovements(): Observable<MovementDto[]> {
    return this.http.get<MovementDto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error("Ocurrió un error:", error);
    return throwError(() =>
      Error("Algo salió mal; por favor, intenta nuevamente más tarde.")
    );
  }
}
