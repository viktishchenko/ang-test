import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/app/models/movies';
import { MoviesListDataHandlerService } from 'src/app/services/movies-list-data-handler.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  moviesList!: IMovies[];

  constructor(private dataHandler: MoviesListDataHandlerService){}

  ngOnInit(){
    this.moviesList = this.dataHandler.getMoviesLists()
    console.log('this.moviesList', this.moviesList)
  }
}
