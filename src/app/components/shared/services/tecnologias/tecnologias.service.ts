import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  constructor(private http: HttpClient) { }


  getQuery(query: string) {

    const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBVVRIMEpXVC1CQUNLRU5EIiwic3ViIjoib3JnLnNwcmluZ2ZyYW1ld29yay5zZWN1cml0eS5jb3JlLnVzZXJkZXRhaWxzLlVzZXIgW1VzZXJuYW1lPWFkbWluQGV4YW1wbGUuY29tLCBQYXNzd29yZD1bUFJPVEVDVEVEXSwgRW5hYmxlZD10cnVlLCBBY2NvdW50Tm9uRXhwaXJlZD10cnVlLCBjcmVkZW50aWFsc05vbkV4cGlyZWQ9dHJ1ZSwgQWNjb3VudE5vbkxvY2tlZD10cnVlLCBHcmFudGVkIEF1dGhvcml0aWVzPVtST0xFX0FETUlOXV0iLCJhdXRob3JpdGllcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MTQ5NDI0NDUsImV4cCI6MTcxNDk0NDI0NSwianRpIjoiNTljN2JjYTQtZWMxZC00MTU1LTk5ZDAtMmQ3ZjZjMTJhNDg2IiwibmJmIjoxNzE0OTQyNDQ1fQ.xFLoMG1dRkTnou-M3qXTy2v-R72r2KeLB5zM06TqU-A'

    const headers = new HttpHeaders(
      {

        /* 'Authorization' : 'Bearer ' + localStorage.getItem('token') */
        'Authorization': 'Bearer ' + token
      }
    );

    return this.http.get(query, {headers})

  }

  getTecnologias() {

    return this.getQuery('http://localhost:8090/technology/?page=0&size=10&ascending=true')
  }
}
