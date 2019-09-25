import { TestBed } from '@angular/core/testing';

import { MediaMatcherService } from './media-matcher.service';

describe('MediaMatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaMatcherService = TestBed.get(MediaMatcherService);
    expect(service).toBeTruthy();
  });
});
