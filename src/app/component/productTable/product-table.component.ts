import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { ProductDTO } from '../dto/ProductDTO';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, NgIf],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent implements OnInit{
// http = inject(HttpClient);
private productService = inject(ProductService)
productPrices: any= [];


  ngOnInit(): void {
    this.getDataById();
  }

  getDataById(){
    this.productService.getProducts().subscribe((productPrices:any)=>{
      console.log(productPrices);
      this.productPrices=productPrices;
      
    })
  }
}

// fetchPosts(){
//   this.http.get('https://jsonplaceholder.typicode.com/posts')
//   .subscribe((posts:any) =>{
//     console.log(this.posts);
//     this.posts = posts;
//   });
// }



  // flag: 'Save' | 'Update' = 'Save';
  // priceList: Array<ProductDTO> = [];


  // constructor(private http: HttpClient) {
  //   http.get<Array<ProductDTO>>('http://localhost:9191/api/v1/product')
  //     .subscribe(priceList => this.priceList = priceList);
  // }

  // inputId: number;
  // data: any;

  // constructor(private dataService: DataService) {}

  // getData() {
  //   this.dataService.getDataById(this.inputId).subscribe(
  //     (result) => {
  //       this.data = result;
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }

