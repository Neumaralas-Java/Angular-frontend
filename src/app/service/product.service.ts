import { ProductDTO } from './../component/dto/ProductDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, PriceDTO } from '../component/dto/PriceDTO';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiurl = 'http://localhost:9191/api/v1/product/item/1';
  constructor(private http: HttpClient) {}

  getAllProductPrices(id: number): Observable<ApiResponse<PriceDTO[]>> {
    return this.http.get<ApiResponse<PriceDTO[]>>(`${this.apiurl}/${id}`);
  }

  createProduct(product: ProductDTO): Observable<any> {
    return this.http.post(`${this.apiurl}`, product);
  }

  updateProduct(id: number, product: ProductDTO): Observable<any> {
    return this.http.put(`${this.apiurl}/${id}`, product);
  }
}
