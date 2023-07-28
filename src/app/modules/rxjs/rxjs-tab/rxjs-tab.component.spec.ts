import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTabComponent } from './rxjs-tab.component';

describe('RxjsTabComponent', () => {
  let component: RxjsTabComponent;
  let fixture: ComponentFixture<RxjsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsTabComponent]
    });
    fixture = TestBed.createComponent(RxjsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
