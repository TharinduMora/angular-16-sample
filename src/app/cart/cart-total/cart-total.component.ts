import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  subTotal = this.cartService.subTotal;
  discount = this.cartService.discount;
  total = this.cartService.total;
  constructor(private cartService: CartService) {

  }
}
