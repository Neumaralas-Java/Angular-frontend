export interface ApiResponse<T> {
  message?: string;
  data: T;
}
export interface PriceDTO {
  id?: number;
  price: number;
}
