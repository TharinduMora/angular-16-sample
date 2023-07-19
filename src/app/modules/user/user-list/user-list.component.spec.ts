import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { Store } from '@ngxs/store';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let storeSpy: jasmine.SpyObj<Store>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('Store', ['select','pipe']);
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: Store, useValue: spy }]
    });
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
