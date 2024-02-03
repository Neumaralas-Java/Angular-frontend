import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-pricetable',
  standalone: true,
  imports: [RouterModule,CommonModule,RouterOutlet],
  templateUrl: './pricetable.component.html',
  styleUrl: './pricetable.component.scss'
})
export class PricetableComponent {

  private productService = inject(ProductService)
productPrices: any= [];


  ngOnInit(): void {
    this.getDataById();
  }

  getDataById(){
    this.productService.getAllProductPrices().subscribe((productPrices:any)=>{
      console.log(productPrices);
      this.productPrices=productPrices;
      
    })
  }
}
