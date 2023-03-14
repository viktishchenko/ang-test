import { Injectable } from '@angular/core';
import { IMovies } from '../models/movies';
import {movies} from '../data/testData'

@Injectable({
  providedIn: 'root'
})
export class MoviesListDataHandlerService {

  constructor() { }

  getMoviesLists(): IMovies[]{
    return movies;
  }
}
