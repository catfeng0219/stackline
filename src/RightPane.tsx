import Table from "./Table";
import {SalesInfo, StoreState} from "./store";
import {useSelector} from 'react-redux';

export type DataViewProps = {
    salesData: SalesInfo[];
};
  
export default function RightPane() {
    const {sales} = useSelector((state: StoreState) => state.productInfo);
    return (
      <div className='right-pane'>
        {/* Optional: provide graph */}
        <Table salesData={sales}/>
      </div>
    );
  }