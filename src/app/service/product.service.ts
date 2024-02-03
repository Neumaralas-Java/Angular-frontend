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
  
  getAllProductPrices(): Observable<ApiResponse<PriceDTO[]>> {
    return this.http.get<ApiResponse<PriceDTO[]>>(`${this.apiurl}`);
  }

  // createProduct(product: IEmployee): Observable<any> {
  //   return this.http.post(`${this.apiurl}`, employee);
  // }
}

// getDataById(id: string): Observable<ApiResponse<PriceDTO[]>> {
//   return this.http.get<ApiResponse<PriceDTO[]>>(`${this.apiUrl}/${id}`);
// }

// createEmployee(employee: IEmployee): Observable<any> {
//   return this.http.post(`${this.apiurl}`, employee);
// }

// updateEmployee(id: string, employee: IEmployee): Observable<any> {
//   return this.http.put(`${this.apiurl}/${id}`, employee);
// }
