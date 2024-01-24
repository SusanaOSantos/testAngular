import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from './models/claim.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  url = 'http://localhost:3000/claims';

  constructor(private http: HttpClient) {}

  async getClaims(): Promise<Claim[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  
  getClaimById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map(data => data as Claim)
    )
  }

  removeUserById(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
