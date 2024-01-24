import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from './models/claim.model';
import { Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  url = 'http://localhost:3000/claims';
  databaseSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getClaims(): Observable<any> {
    return this.http.get(this.url).pipe(map((data) => data as Claim));
  }

  getClaimById(id: string): Observable<any> {
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(map((data) => data as Claim));
  }

  removeClaimById(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  editClaim(claim: Claim) {
    this.databaseSubject.next(true);
    return this.http.patch(`${this.url}/${claim.id}`, {
      claimerName: claim.claimerName,
      email: claim.email,
      dismissalReason: claim.dismissalReason,
    });
  }
  createClaim(claim: Claim) {
    return this.http.post(`${this.url}`, {
      claimerName: claim.claimerName,
      email: claim.email,
      dismissalReason: claim.dismissalReason,
    }).pipe(tap(() =>
       {this.databaseSubject.next(true)}
    ));
  }
}
