import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators'
import { Repos } from 'src/app/model/repos';
import { RepositoriesService } from 'src/app/service/repositories.service';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.scss']
})
export class RepolistComponent implements OnInit {

  repos$: Observable<Repos[]> = this.activatedRoute.params.pipe(
    switchMap(data => this.repositoriesService.getRepos(data.name)));

  // nincs rá szükség, mert a serviceből már eszerint kapja, csak átrendezéshez kell
  columnKey: string = "updated";

  constructor(
    private activatedRoute: ActivatedRoute,
    private repositoriesService: RepositoriesService,
  ) { }

  ngOnInit(): void {
  }

  onColumnSelect(key: string) {
    this.columnKey = key;
  }

}
