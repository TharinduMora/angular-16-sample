import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
})
export class FullLayoutComponent {}
