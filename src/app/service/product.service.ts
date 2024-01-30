import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const apiUrl = 'http://localhost:9191/api/v1/product/item/1';
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() {}
  getProducts() {
    return this.http.get(apiUrl);
  }
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
