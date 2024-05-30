import Graph from "./Graph";
import Table from "./Table";
import { StoreState } from "./store";
import { useSelector } from "react-redux";

export default function RightPane() {
  const { sales } = useSelector((state: StoreState) => state.productInfo);
  return (
    <div className="right-pane">
      <Graph salesData={sales} />
      <Table salesData={sales} />
    </div>
  );
}
