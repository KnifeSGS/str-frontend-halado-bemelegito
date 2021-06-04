import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorsService } from 'src/app/service/contributors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // from JCserko
  // eventSubscription = fromEvent(window, "scroll").subscribe(e => {
  //   const isBottom = document.body.offsetHeight - window.scrollY - 500 < 500;
  //   if (isBottom) {
  //     this.page++;
  //     this.dataArr$ = this.contribService.getContributors(this.page, this.itemsPerPage);
  //   }
  // });

  page: number = 1;
  itemsPerPage: number = 25;

  dataArr$: Observable<Contributor[]> = this.contribService.getContributors(this.page, this.itemsPerPage);

  // contributors: Contributor[] = []

  constructor(
    private contribService: ContributorsService,
  ) {
    // this.dataArr$.subscribe(
    //   contribs => {
    //     this.contributors = contribs
    //   },
    //   error => this.showError(error)
    // )
  }

  ngOnInit(): void {
  }

  showError(message: string) {
    console.log(message);
  }

  onScroll() {
    // this.itemsPerPage += 25;
    // this.dataArr$.subscribe(
    //   contribs => {
    //     this.contributors = contribs
    //   },
    //   error => this.showError(error)
    // )
    this.page += 1;
    this.dataArr$ = this.contribService.getContributors(this.page, this.itemsPerPage);
  }
}
