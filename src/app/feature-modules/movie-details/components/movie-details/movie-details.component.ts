import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  id: string;
  movie: any;
  subscriptions: Subscription[] = [];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.loading = true;

      this.subscriptions.push(
        this.movieService.getMovieById(this.id).subscribe((movie) => {
          this.movie = movie;
          this.loading = false;
        })
      );
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => { subscription.unsubscribe(); });
  }
}
