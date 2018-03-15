import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model/movie.model.module';
import { MoviesService } from '../../service/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie: Movie;

  constructor(private moviesService : MoviesService,
  private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes
    .params
    .subscribe(params => this.movie = this.moviesService.getMovie(Number(params['id'])))
  }

}
