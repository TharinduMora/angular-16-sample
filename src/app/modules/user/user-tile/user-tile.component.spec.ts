import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTileComponent } from './user-tile.component';

describe('UserTileComponent', () => {
  let component: UserTileComponent;
  let fixture: ComponentFixture<UserTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTileComponent]
    });
    fixture = TestBed.createComponent(UserTileComponent);
    component = fixture.componentInstance;
    component.data = { id: 1, first_name: 'Test', last_name: 'Test', email: 'ee', avatar: 'number', };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
