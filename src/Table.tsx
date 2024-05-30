import './App.css';
import {SaleInfo} from './types';

type DataViewProps = {
    salesData: SaleInfo[];
};

export default function Table({salesData}: DataViewProps) {
    return (
      <table>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale: SaleInfo) => (
            <tr key={sale.weekEnding}>
              <td>{sale.weekEnding}</td>
              <td>{sale.retailSales}</td>
              <td>{sale.wholesaleSales}</td>
              <td>{sale.unitsSold}</td>
              <td>{sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
  