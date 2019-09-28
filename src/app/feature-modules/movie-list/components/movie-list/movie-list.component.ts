import { Component, OnInit } from '@angular/core';

interface Movie {
  title: string;
  id: number;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [
    {
      title: 'The Matrix',
      id: 100,
    },
    {
      title: 'The Matrix II',
      id: 101,
    },
    {
      title: 'The Matrix III',
      id: 102,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
