import { Component, signal } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = signal<IProduct[]>([]);
  selectedProduct = signal<IProduct | null>(null);

  ngOnInit() {
    this.products.set([
      {
        id: '1',
        name: 'Product 1',
        price: 20,
        availbleQuantity: 200
      },
      {
        id: '2',
        name: 'Product 2',
        price: 34,
        availbleQuantity: 200
      },
      {
        id: '3',
        name: 'Product 3',
        price: 100,
        availbleQuantity: 10
      }
    ])
  }

  onSelectProduct(id: string) {
    this.selectedProduct.set(this.products().filter(p => p.id === id)[0])
  }

}
