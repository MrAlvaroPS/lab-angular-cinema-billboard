import { Injectable } from '@angular/core';
import { Movie } from '../../app/models/movie.model/movie.model.module';
import { movies } from '../../sample-movies';


@Injectable()
export class MoviesService {
  movies : Array<Movie> = movies;

  constructor() { }

   getMovies() {
     return this.movies;
   }

   getMovie(id: Number): Movie {
    return this.movies.find(movie => movie.id === id);
   }

}
