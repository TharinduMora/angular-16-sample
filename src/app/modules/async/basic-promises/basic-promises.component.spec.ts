import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPromisesComponent } from './basic-promises.component';

describe('BasicPromisesComponent', () => {
  let component: BasicPromisesComponent;
  let fixture: ComponentFixture<BasicPromisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPromisesComponent]
    });
    fixture = TestBed.createComponent(BasicPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
