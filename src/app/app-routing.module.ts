import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './features/home-screen/home-screen.component';
import { SearchComponent } from './features/search/search.component';
import { MovieDetailComponent } from './features/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
