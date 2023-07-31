import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cd-child',
  templateUrl: './cd-child.component.html',
  styleUrls: ['./cd-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdChildComponent implements AfterViewInit {
  @Input() count = 0;
  cdCount = 0;

  constructor(private cd: ChangeDetectorRef) { }

  checkView() {
    this.cdCount++;
    return this.cdCount;
  }

  ngAfterViewInit() {
    // this.cd.detach()
  }
}
