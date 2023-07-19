import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@Component({
  selector: 'app-cart-landing',
  standalone: true,
  imports: [CommonModule, CartListComponent, CartTotalComponent],
  templateUrl: './cart-landing.component.html',
  styleUrls: ['./cart-landing.component.css']
})
export class CartLandingComponent {

}
