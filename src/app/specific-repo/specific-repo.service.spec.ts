import { TestBed } from '@angular/core/testing';

import { SpecificRepoService } from './specific-repo.service';

describe('SpecificRepoService', () => {
  let service: SpecificRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
