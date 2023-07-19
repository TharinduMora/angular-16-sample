import { Injectable, computed, signal } from "@angular/core";
import { ICartItem } from "./cart.interface";
import { IProduct } from "../interfaces/product.interface";

@Injectable({ providedIn: 'root' })
export class CartService {
    cartItems = signal<ICartItem[]>([]);

    subTotal = computed<number>((): number => {
        let t = 0;
        this.cartItems().forEach(ci => t = t + (ci.product.price * ci.quantity))
        return t;
    });

    discount = computed(() => {
        return this.subTotal() > 100 ? this.subTotal() * 0.1 : 0
    })

    total = computed(() => {
        return this.subTotal() - this.discount()
    })

    addToCart(item: IProduct) {
        const alreadyExist = this.cartItems().find((v) => v.product.id === item.id);
        this.cartItems.mutate(d => {
            if (!alreadyExist)
                d.push({ product: item, quantity: 1 })
        })
    }

    removeFromCart(item: ICartItem) {
        this.cartItems.update(d => d.filter((v) => v.product.id !== item.product.id))
    }

    increaseQuantity(item: ICartItem) {
        this.cartItems.update(items =>
            items.map(i => i.product.id === item.product.id ?
                {
                    ...i,
                    quantity: (i.quantity + 1 >= i.product.availbleQuantity ? i.product.availbleQuantity : i.quantity + 1)
                }
                : i)
        )
    }

    decreaseQuantity(item: ICartItem) {
        this.cartItems.update(items =>
            items.map(i => i.product.id === item.product.id ? { ...i, quantity: (i.quantity - 1 <= 1 ? 1 : i.quantity - 1) } : i)
        )
    }
}