import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from '../model/repos';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  repoUrl: string = "https://api.github.com/users"

  constructor(private http: HttpClient) { }

  getRepos(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.repoUrl}/${name}/repos?sort=updated`);
  }
}
