import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileBioComponent } from './my-profile-bio.component';

describe('MyProfileBioComponent', () => {
  let component: MyProfileBioComponent;
  let fixture: ComponentFixture<MyProfileBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
