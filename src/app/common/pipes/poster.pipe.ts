import { Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {
  constructor(
    private appConfig: AppConfig,
  ) {}

  transform(value: any, width: number = 92): any {
    return this.appConfig.movieDbImgPosterPath + 'w' + width + '/' + value;
  }

}
