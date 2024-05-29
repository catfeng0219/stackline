import stackline_logo from './assets/stackline_logo.svg';
import './App.css';
import jsonData from './data/stackline_frontend_assessment_data_2021.json';

type SalesInfo = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

type GraphProps = {
  salesData: SalesInfo[];
};

type TableProps = {
  salesData: SalesInfo[];
};

function App() {
  const salesData: Array<SalesInfo>  = jsonData[0]["sales"];

  return (
      <div style={{width: '100%', height: '100%', backgroundColor: 'yellow'}}>
        <img src={stackline_logo} className="logo" alt="Vite logo" />
          <Graph salesData={salesData} />
          <Table salesData={salesData} />
      </div>

  );
}

function Graph({salesData}: GraphProps) {
  console.log(salesData);
  return (
    <div>
      <h2>Sales Graph Placeholder</h2>
      {/* Implement the graph logic here using salesData */}
    </div>
  );
}

function Table({ salesData }: TableProps) {
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
        {salesData.map((sale) => (
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

export default App;
