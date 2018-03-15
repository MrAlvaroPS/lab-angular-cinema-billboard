import { MyHomeComponentComponent } from '../../components/my-home-component/my-home-component.component'
import { MyMovieComponentComponent } from '../../components/my-movie-component/my-movie-component.component'
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

