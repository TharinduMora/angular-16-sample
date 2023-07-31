import { Component } from '@angular/core';

@Component({
  selector: 'app-cd-parent',
  templateUrl: './cd-parent.component.html',
  styleUrls: ['./cd-parent.component.css']
})
export class CdParentComponent {
  count = 0;
  pOnlyCount = 0;

  increaseCount() {
    this.count++;
  }

  increasePOnlyCount() {
    this.pOnlyCount++;
  }
}
