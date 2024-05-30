import { SaleInfo } from "./types";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

type DataViewProps = {
  salesData: SaleInfo[];
};

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ salesData }: DataViewProps) {
  const data = {
    labels: salesData.map((sale) => sale.weekEnding),
    datasets: [
      {
        label: "Retail Sales",
        data: salesData.map((sale) => sale.retailSales),
        borderColor: "rgba(113,65,178,0.61)",
        fill: true,
      },
      {
        label: "Wholesale Sales",
        data: salesData.map((sale) => sale.wholesaleSales),
        borderColor: "rgba(0,82,252,0.48)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Retail and Wholesale Sales",
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 20,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
