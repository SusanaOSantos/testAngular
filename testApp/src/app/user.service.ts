import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from './models/claim.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  async getUsers(): Promise<Claim[]> {
    const data = await fetch(this.url);
    console.log('here');
    return (await data.json()) ?? [];
  }
  async getUserById(id: number): Promise<Claim | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
