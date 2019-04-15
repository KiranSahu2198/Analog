import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iuser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  private url: string = './assets/data/user.json';
  userData(): Observable<iuser[]> {
    return this.http.get<iuser[]>(this.url);
  }

  /* userData(){
    return[
      {"name":"Kiran", "id":123, "role":"ui"},
      {"name":"Vikas", "id":465, "role":".net"},
      {"name":"Tapas", "id":789, "role":"java"},
      {"name":"Mono", "id":159, "role":"finance"}
    ];
  } */
}
