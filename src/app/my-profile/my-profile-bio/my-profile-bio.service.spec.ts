import { TestBed } from '@angular/core/testing';

import { MyProfileBioService } from './my-profile-bio.service';

describe('MyProfileBioService', () => {
  let service: MyProfileBioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProfileBioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
