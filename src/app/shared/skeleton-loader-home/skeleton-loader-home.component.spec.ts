import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoaderHomeComponent } from './skeleton-loader-home.component';

describe('SkeletonLoaderHomeComponent', () => {
  let component: SkeletonLoaderHomeComponent;
  let fixture: ComponentFixture<SkeletonLoaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonLoaderHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonLoaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
