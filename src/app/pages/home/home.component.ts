import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorsService } from 'src/app/service/contributors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  itemsPerPage: number = 25

  dataArr$: Observable<Contributor[]> = this.contribService.getContributors(this.page, this.itemsPerPage);

  contributors: Contributor[] = []

  constructor(
    private contribService: ContributorsService,
  ) {
    this.dataArr$.subscribe(
      contribs => {
        this.contributors = contribs
      },
      error => this.showError(error)
    )
  }

  ngOnInit(): void {
  }

  showError(message: string) {
    console.log(message);
  }

}
