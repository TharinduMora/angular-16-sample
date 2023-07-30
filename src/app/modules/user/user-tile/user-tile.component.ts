import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css'],
})
export class UserTileComponent {
  // @Input() data!: IUser;
  @Output() clicked: EventEmitter<IUser> = new EventEmitter();

  testEE: EventEmitter<string> = new EventEmitter(true);

  private _data!: IUser;
  @Input()
  // @ts-ignore
  set data(user: IUser) {
    this._data = user;
  }
  // @ts-ignore
  get data(): IUser | undefined {
    return this._data;
  }

  onClick() {
    this.testEE.emit('Emit value');
    this.clicked.emit(this.data);
  }

  ngOnInit() {
    this.testEE.pipe(take(1)).subscribe((r) => console.log(r));
  }
}
