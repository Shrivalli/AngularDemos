import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  // public getUsers():Observable<any[]>
  // {
  // //  return this.httpClient.get("https://api.randomuser.me/");
  // }
}
