import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificRepoComponent } from './specific-repo.component';

describe('SpecificRepoComponent', () => {
  let component: SpecificRepoComponent;
  let fixture: ComponentFixture<SpecificRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificRepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
