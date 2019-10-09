import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../../services/movie.service';
import { TagsService } from 'src/app/common/services/common-tags.service';

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
    private tagsService: TagsService,
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
      this.tagsService.getUserTags(),
    ])
      .then((resolved) => {
        this.movie = resolved[0];
        this.movieTags = resolved[1];
        this.userTags = resolved[2];
      })
      .finally(() => {
        this.loading = false;
      });
  }

  onAddTag(tag: string) {
    this.movieService.addMovieTag(this.movie, tag);
  }

  onRemoveTag(tag: string) {
    this.movieService.removeMovieTag(this.movie.id, tag);
  }
}
