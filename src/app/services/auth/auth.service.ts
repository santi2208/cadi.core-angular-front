import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from 'app/dtos/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    const loginUrl = 'http://localhost:5179/api/Auth/login'; 
    return this.http.post<LoginResponse>(`${loginUrl}`, { email: email, password })
      .pipe(tap(loginResponse => {
        if (loginResponse && loginResponse.token) {
          localStorage.setItem('currentUser', JSON.stringify(loginResponse));
          this.currentUserSubject.next(loginResponse);
        }
      }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
  getToken(): string | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      return parsedUser.token;
    }
    return null;
  }

  // isAuthenticated(): boolean {
  //   // Lógica para verificar si el usuario está autenticado
  //   // Por ejemplo, verificar si existe un token válido en el almacenamiento local
  //   return !!localStorage.getItem('token');
  // }
}
