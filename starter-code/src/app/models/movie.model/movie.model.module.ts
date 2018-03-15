import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours?: Array<string>;
  room?: number;
}