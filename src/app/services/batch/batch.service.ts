import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  
  constructor(private http: HttpClient) {}
  approve(batchId:number): Observable<any>{
    let apiUrl = `http://localhost:5179/api/Batch/Approve?batchId=${batchId}`;
    
    return this.http.post(apiUrl, null);
  }
}
