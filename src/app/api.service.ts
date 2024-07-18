import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private apiUrl = 'http://verbs.test/api'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) { }

  getVerbs(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/verbs?page=${page}`);
  }
  getSearchVerb(simpler_fom: string=''): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/verbs/search?simpler_fom=${simpler_fom}`);

  }
  getAdjetives(page: number = 1): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/adjetives?page=${page}`);
  }
  getSearchAdjetives(adj: string=''): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/adjetives/search?adjetivo_positivo=${adj}`);

  }
}
