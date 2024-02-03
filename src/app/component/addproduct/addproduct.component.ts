import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../service/product.service';
import { ProductDTO } from '../dto/ProductDTO';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss',
})
export class AddproductComponent implements OnChanges {
  @Input() data: ProductDTO | null = null;
  @Output() onCloseModel = new EventEmitter();
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService
  ) {
    this.productForm = this.fb.group({
      productName: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.email]),
      cartPrice: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
    });
  }
  onClose() {
    this.onCloseModel.emit(false);
  }

  ngOnChanges(): void {
    if (this.data) {
      this.productForm.patchValue({
        productName: this.data.productName,
        quantity: this.data.quantity,
        cartPrice: this.data.cartPrice,
        discount: this.data.discount,
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.data) {
        this.productService
          .updateProduct(this.data.id, this.productForm.value)
          .subscribe({
            next: (response: any) => {
              this.resetProductForm();
              this.toastr.success(response.message);
            },
          });
      } else {
        this.productService.createProduct(this.productForm.value).subscribe({
          next: (response: any) => {
            this.resetProductForm();
            this.toastr.success(response.message);
          },
        });
      }
    } else {
      this.productForm.markAllAsTouched();
    }
  }
  resetProductForm() {
    this.productForm.reset();
    this.onClose();
  }
}
