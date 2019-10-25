import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // d'habitude =>CRUD
  url = 'http://localhost:5000/api/connexion';
  login(credentials) {
    // appel à une API
    // ce n'est pas une promesse c'est un observable
    // opérateur d'observable
    return this.http.post(this.url, credentials).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  logout() {}
}
