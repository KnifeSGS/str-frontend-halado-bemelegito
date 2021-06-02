import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  gitURL: string = "https://api.github.com/repos/angular/angular/contributors?page=1&per_page=25"

  constructor(private http: HttpClient) { }

  getContributors(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.gitURL);
  }
}
