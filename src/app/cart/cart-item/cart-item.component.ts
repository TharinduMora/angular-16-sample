import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICartItem } from '../cart.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: ICartItem;

  constructor(private cartService: CartService) {

  }

  remveFromCart() {
    this.cartService.removeFromCart(this.item)
  }

  increaseQuantity() {
    this.cartService.increaseQuantity(this.item)
  }

  decreaseQuantity() {
    this.cartService.decreaseQuantity(this.item)
  }
}
