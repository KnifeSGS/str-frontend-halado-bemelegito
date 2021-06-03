import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  gitURL: string = "https://api.github.com/repos/angular/angular/contributors"

  constructor(private http: HttpClient) { }

  getContributors(page: number = 1, items: number = 25): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${this.gitURL}?page=${page}&per_page=${items}`);
  }
}
