import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Store } from '@ngxs/store';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let storeSpy: jasmine.SpyObj<Store>;

  let mockUserList = [
    { id: 1, first_name: 'Test', last_name: 'Test', email: 'test@email.com', avatar: 'avatar' },
    { id: 2, first_name: 'Test', last_name: 'Test', email: 'test@email.com', avatar: 'avatar' },
  ]

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', {
      'select': of([])
    });
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(Store)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.userList.length).toBe(0);
    expect(component.subscription).toBeTruthy()
  });

  it('should call subscribe', fakeAsync(
    () => {
      let userSpy = storeSpy.select.and.returnValue(of(mockUserList));
      let subSpy = spyOn(storeSpy.select(''), 'subscribe')
      component.ngOnInit();
      tick()
      expect(userSpy).toHaveBeenCalledBefore(subSpy)
      expect(subSpy).toHaveBeenCalled();
    }
  ))

  it('should append user list', async () => {
    storeSpy.select.and.returnValue(of(mockUserList));
    component.ngOnInit();
    expect(component.userList.length).toBe(2);
  });
});
