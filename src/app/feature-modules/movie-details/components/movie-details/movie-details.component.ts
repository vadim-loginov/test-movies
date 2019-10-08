import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  movieTags: string[];
  userTags: string[];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.init(params.get('id'));
    });
  }

  private init(movieId) {
    this.loading = true;

    Promise.all([
      this.movieService.getMovieById(movieId),
      this.movieService.getMovieTags(movieId),
      this.movieService.getUserTags(),
    ])
      .then((resolved) => {
        this.movie = resolved[0];
        this.movieTags = resolved[1];
        this.userTags = resolved[2];
        console.log('MovieDetailsComponent', this);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  onAddTag(tag: string) {
    this.movieService.addMovieTag(this.movie.id, tag);
  }

  onRemoveTag(tag: string) {
    this.movieService.removeMovieTag(this.movie.id, tag);
  }
}
