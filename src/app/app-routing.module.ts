import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RepolistComponent } from './pages/repolist/repolist.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":name",
    component: RepolistComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
