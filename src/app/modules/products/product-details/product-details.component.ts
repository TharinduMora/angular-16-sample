import { Component, Input, signal } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input({ required: true }) data = signal<IProduct | null>(null);

  constructor(private cartService: CartService) {

  }
  ngOnInit() {

  }

  increaseQuantity() {
    this.data.mutate(d => {
      if (d) {
        d.availbleQuantity = d?.availbleQuantity + 1
      }
    })
  }

  decreaseQuantity() {
    this.data.mutate(d => {
      if (d) {
        d.availbleQuantity = d?.availbleQuantity - 1
      }
    })
  }

  addToCart() {
    this.data() && this.cartService.addToCart(this.data()!)
  }

}
