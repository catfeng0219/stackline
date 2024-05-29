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

type LeftPaneProps = {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

function App() {
  const data = jsonData[0];
  const salesData: Array<SalesInfo> = data["sales"];
  return (
    <div className="body">
      <Banner />
      <div style={{ display: 'flex' }}>
        <LeftPane 
          title={data["title"]}
          subtitle={data["subtitle"]}
          image={data["image"]}
          tags={data["tags"]}
        />
        <RightPane salesData={salesData} />
      </div>
    </div>
  );
}

function Banner() {
  return <div className='banner'><img className='banner-logo' src={stackline_logo} alt="Stackline logo" /></div>;
}

function LeftPane({title, subtitle, tags, image}: LeftPaneProps) {
  return (
    <div className='left-pane'>
      <img className='product-image' src={image} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className='tags'>{tags.map((tag) => <div key={tag} className="tag">{tag}</div>)}</div>
    </div>);
}

function RightPane({ salesData }: DataViewProps) {
  return (
    <div className='right-pane'>
      <Table salesData={salesData} />
    </div>
  );
}

export default App;
