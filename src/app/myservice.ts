import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private apiUrl = 'https://yogaapi-10086380608.development.catalystappsail.com/asanaapi/Testing';

  constructor(private http: HttpClient) {}

  submitData(data: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl,data,{headers});}
}