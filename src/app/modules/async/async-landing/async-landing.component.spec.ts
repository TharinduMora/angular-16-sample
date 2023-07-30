import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncLandingComponent } from './async-landing.component';

describe('AsyncLandingComponent', () => {
  let component: AsyncLandingComponent;
  let fixture: ComponentFixture<AsyncLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncLandingComponent]
    });
    fixture = TestBed.createComponent(AsyncLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
