import stackline_logo from './assets/stackline_logo.svg';
import './App.css';
import jsonData from './data/stackline_frontend_assessment_data_2021.json';
import Table from './Table';

export type SalesInfo = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type DataViewProps = {
  salesData: SalesInfo[];
};

function App() {
  const salesData: Array<SalesInfo> = jsonData[0]["sales"];
  return (
    <>
      <Banner />
      <div style={{ display: 'flex' }}>
        <LeftPane />
        <RightPane salesData={salesData} />
      </div>
    </>
  );
}

function Banner() {
  return <div className='banner'><img className='banner-logo' src={stackline_logo} alt="Stackline logo" /></div>;
}

function LeftPane() {
  return <h2>Left Pane Placeholder</h2>;
}

function RightPane({ salesData }: DataViewProps) {
  return (
    <div className='right-pane'>
      <Table salesData={salesData} />
    </div>
  );
}

export default App;
