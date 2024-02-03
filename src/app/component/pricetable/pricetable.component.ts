import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PriceDTO } from '../dto/PriceDTO';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-pricetable',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet],
  templateUrl: './pricetable.component.html',
  styleUrl: './pricetable.component.scss',
})
export class PricetableComponent {
  priceList: PriceDTO | any;
  id: number | any;

  productPrices: any = [];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  getData(id: string) {
    const parsedId = parseInt(id, 10);

    if (!isNaN(parsedId)) {
      this.id = parsedId;
    } else {
      console.error('Invalid ID entered.');
    }
    this.productService.getAllProductPrices(this.id).subscribe(
      (result) => {
        this.priceList = result;
      },
      (error) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

  // getDataById(id: number | null) {
  //   this.http.get<Array<PriceDTO>>(`${this.API_BASE_URL}/${id}`).subscribe(
  //     (priceList) => {
  //       this.toastr.success('Price list fetch successful', 'Success');
  //       const index=this.priceList.findIndex(product => this.priceList.id == productId);
  //       const url = `${this.API_BASE_URL}/${productId}`;
  //       return this.http.get<PriceDTO>(url);
  //     },
  //     (err) => {
  //       this.toastr.error(err.error.message, 'Error');
  //     }
  //   );
  // }
}
