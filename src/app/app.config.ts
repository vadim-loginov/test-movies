import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  movieDbApiPrefix = 'https://api.themoviedb.org/3/';
  movieDbApiKey = 'api_key=2cdb1b1199194ebc0348f30796fa41c8';
  movieDbImgPosterPath = 'https://image.tmdb.org/t/p/';
}
