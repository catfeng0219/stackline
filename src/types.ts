export type SaleInfo = {
    "weekEnding": string;
    "retailSales": number;
    "wholesaleSales": number;
    "unitsSold": number;
    "retailerMargin": number;
  };

  export interface ProductInfo {
    title: string;
    image: string;
    subtitle: string;
    tags: string[];
    sales: SaleInfo[];
  }