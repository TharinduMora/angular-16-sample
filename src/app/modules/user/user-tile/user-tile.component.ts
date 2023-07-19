import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent {
  @Input() data!: IUser;
  @Output() clicked: EventEmitter<IUser> = new EventEmitter()

  onClick() {
    this.clicked.emit(this.data)
  }

}
