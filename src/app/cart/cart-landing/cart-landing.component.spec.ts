import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLandingComponent } from './cart-landing.component';

describe('CartLandingComponent', () => {
  let component: CartLandingComponent;
  let fixture: ComponentFixture<CartLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartLandingComponent]
    });
    fixture = TestBed.createComponent(CartLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
