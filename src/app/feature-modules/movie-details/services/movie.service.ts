import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class MovieService {

  constructor() { }

  getMovieById(id: number|string) {
    return of({
      title: `The Matrix ${id}`,
      id,
    });
  }
}
