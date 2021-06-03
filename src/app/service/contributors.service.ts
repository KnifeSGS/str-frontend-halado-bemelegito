import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contributor } from '../model/contributor';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  gitURL: string = "https://api.github.com/repos/angular/angular/contributors"
  contribsList: BehaviorSubject<Contributor[]> = new BehaviorSubject<Contributor[]>([]);

  constructor(private http: HttpClient) { }

  getNextContributors(page: number = 1, items: number = 25): void {
    this.http.get<Contributor[]>(`${this.gitURL}?page=${page}&per_page=${items}`)
      .subscribe(
        list => this.contribsList.next(list)
      );
  }

  getContributors(page: number = 1, items: number = 25): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${this.gitURL}?page=${page}&per_page=${items}`);
  }
}
