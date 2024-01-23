import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from './models/claim.model';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  url = 'http://localhost:3000/claims';

  constructor(private http: HttpClient) {}

  async getClaims(): Promise<Claim[]> {
    const data = await fetch(this.url);
    console.log('here');
    return (await data.json()) ?? [];
  }
  async getClaimById(id: number): Promise<Claim | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
