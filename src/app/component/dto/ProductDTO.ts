export class ProductDTO {
    constructor(
      public id: number,
      public productName: string,
      public quantity: number,
      public cartPrice: number,
      public discount:number
    ) {}
  }
