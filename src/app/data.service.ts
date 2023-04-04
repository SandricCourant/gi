import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsersByGender(gender: string, nb: number) {
    const params = { gender: gender, results: nb };
    return this.http.get(this.apiUrl, { params: params });
  }

  getUsersByNationality(nationality: string) {
    const params = { nationality: nationality };
    return this.http.get(this.apiUrl, { params: params });
  }
}