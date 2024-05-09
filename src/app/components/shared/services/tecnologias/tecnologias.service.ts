import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Tecnologia } from '../../class/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBVVRIMEpXVC1CQUNLRU5EIiwic3ViIjoib3JnLnNwcmluZ2ZyYW1ld29yay5zZWN1cml0eS5jb3JlLnVzZXJkZXRhaWxzLlVzZXIgW1VzZXJuYW1lPWFkbWluQGV4YW1wbGUuY29tLCBQYXNzd29yZD1bUFJPVEVDVEVEXSwgRW5hYmxlZD10cnVlLCBBY2NvdW50Tm9uRXhwaXJlZD10cnVlLCBjcmVkZW50aWFsc05vbkV4cGlyZWQ9dHJ1ZSwgQWNjb3VudE5vbkxvY2tlZD10cnVlLCBHcmFudGVkIEF1dGhvcml0aWVzPVtST0xFX0FETUlOXV0iLCJhdXRob3JpdGllcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MTUyOTQxODcsImV4cCI6MTcxNTI5NTk4NywianRpIjoiMWNjZDc4ZmEtYmVkMy00ZWQyLWFmODYtOTg2YTU2NDQxM2Y2IiwibmJmIjoxNzE1Mjk0MTg3fQ.TnTqgqGc3y1AetjjIfhiJpdwBNcXMZq209vU2wl0YZ8'

  constructor(private http: HttpClient) { }


  getQuery(query: string) {


    const headers = new HttpHeaders(
      {

        /* 'Authorization' : 'Bearer ' + localStorage.getItem('token') */
        'Authorization': 'Bearer ' + this.token
      }
    );

    return this.http.get(query, {headers})

  }

  postQuery(query: string, tecnologia: Tecnologia) {

    const headers = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + this.token
      }

    );

    return this.http.post(query, tecnologia, {headers})
  }

  getTecnologias(page: number, size:number) {

    return this.getQuery('http://localhost:8090/technology/?page=' + page + '&size=' + size + '&ascending=true')
  }

  postTecnologias(tecnologia: Tecnologia){

    return this.postQuery('http://localhost:8090/technology/', tecnologia)

  }
}
