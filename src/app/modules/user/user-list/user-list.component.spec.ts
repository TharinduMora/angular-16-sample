import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let storeSpy: jasmine.SpyObj<Store>;

  let mockUserList = [
    { id: 1, first_name: 'Test', last_name: 'Test', email: 'test@email.com', avatar: 'avatar' },
    { id: 2, first_name: 'Test', last_name: 'Test', email: 'test@email.com', avatar: 'avatar' },
  ]

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Store', {
      'select': of([])
    });
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
    expect(component.userObjList).toBeDefined();
  });

  it('should received user list', () => {
    storeSpy.select.and.returnValue(of(mockUserList))
    component.ngOnInit()
    expect(component.userObjList.length).toBe(2)
  })
});
