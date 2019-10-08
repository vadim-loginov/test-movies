import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tags',
  templateUrl: './movie-tags.component.html',
  styleUrls: ['./movie-tags.component.sass']
})
export class MovieTagsComponent implements OnInit {
  @Input() tags: string[];
  @Input() allTags: string[];

  constructor() { }

  ngOnInit() {
  }

}
