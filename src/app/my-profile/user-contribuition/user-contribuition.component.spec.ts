import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContribuitionComponent } from './user-contribuition.component';

describe('UserContribuitionComponent', () => {
  let component: UserContribuitionComponent;
  let fixture: ComponentFixture<UserContribuitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContribuitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContribuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
