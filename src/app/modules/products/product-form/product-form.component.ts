import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Input({ required: false }) selectedProduct!: IProduct | undefined;
  @Output() productAdded: EventEmitter<IProduct> = new EventEmitter();
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['selectedProduct']?.previousValue?.id ===
      changes['selectedProduct']?.currentValue?.id
    ) {
      this.selectedProduct = undefined;
    } else if (changes['selectedProduct']?.currentValue) {
      this.selectedProduct = changes['selectedProduct']?.currentValue;
    }
    this.initForm();
  }

  initForm() {
    this.productForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [null, [Validators.required]],
      availbleQuantity: [null, [Validators.required]],
    });

    if (this.selectedProduct) {
      this.productForm.patchValue({
        id: this.selectedProduct.id,
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        availbleQuantity: this.selectedProduct.availbleQuantity,
      });
    } else {
      // Patch Value
      this.productForm.patchValue({
        id: `${new Date().getTime()}`,
      });
    }

    // disable field
    this.f.id.disable();
  }

  addProduct() {
    if (this.productForm.valid) {
      // getRawValue returns values in disabled field also
      this.productAdded.emit(this.productForm.getRawValue());
      // reset the form
      this.productForm.reset();
      this.productForm.patchValue({
        id: `${new Date().getTime()}`,
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  // @ts-ignore
  get f(): any {
    return this.productForm?.controls;
  }
}
