import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { movies } from '../../../sample-movies';
import { Movie } from '../../models/movie.model/movie.model.module';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Movie> = []

  constructor(private MoviesService: MoviesService,
    private routes: ActivatedRoute,
    private router: Router) {
    this.MoviesService.movies = movies;
  }

  ngOnInit() {
    this.movies = this.MoviesService.getMovies();
  }

  onClick(id: Number){
    console.log('click');
    this.router.navigate(['/movie', id])

  }

}
