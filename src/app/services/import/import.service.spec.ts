import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AccountDto {
  id: number;
  number: string;
  name: string;
  parentAccountId?: number;
  currencyTypeId: number;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:5000/api/account'; // Cambia la URL base según tu API.

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de cuentas desde la API.
   * @returns Un Observable con los datos de tipo AccountDto[].
   */
  getAllAccounts(): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(`${this.baseUrl}`);
  }
}
