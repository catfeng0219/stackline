import "./App.css";
import { SaleInfo } from "./types";
import { useState, useMemo } from "react";

type DataViewProps = {
  salesData: SaleInfo[];
};

type SaleCategory = keyof SaleInfo;

type HeaderInfo = {
  title: string;
  category: SaleCategory;
};

const headerConfig: HeaderInfo[] = [
  {
    title: "Week Ending",
    category: "weekEnding",
  },
  {
    title: "Retail Sales",
    category: "retailSales",
  },
  {
    title: "Wholesale Sales",
    category: "wholesaleSales",
  },
  {
    title: "Units Sold",
    category: "unitsSold",
  },
  {
    title: "Retailer Margin",
    category: "retailerMargin",
  },
];

export default function Table({ salesData }: DataViewProps) {
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [category, setCategory] = useState<SaleCategory>("weekEnding");

  const orderedItems = useMemo(() => {
    return sortSalesByCategory([...salesData], category, isAscending);
  }, [category, salesData, isAscending]);

  const onCategoryClick = (selectedCategory: SaleCategory) => {
    if (selectedCategory === category) {
      setIsAscending(!isAscending);
    } else {
      setCategory(selectedCategory);
      setIsAscending(true);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {headerConfig.map((header, index) => (
            <CategoryHeader
              key={index}
              title={header.title}
              onClick={() => onCategoryClick(header.category)}
              isActive={header.category === category}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {/* TODO: virtualize/paginate items to handle larger data lists */}
        {orderedItems.map((sale: SaleInfo) => (
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

type CategoryHeaderProps = {
  onClick: () => void;
  title: string;
  isActive: boolean;
};

function CategoryHeader({ onClick, title, isActive }: CategoryHeaderProps) {
  return (
    <th>
      <button
        className={[
          "sales-category-heading",
          isActive && "sales-category-active",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={onClick}
      >
        {title}
      </button>
    </th>
  );
}

function sortSalesByCategory(
  sales: SaleInfo[],
  category: SaleCategory,
  isAscending: boolean
): SaleInfo[] {
  return sales.sort((a, b) => {
    if (category === "weekEnding") {
      // Compare dates
      if (isAscending) {
        return (
          new Date(a[category]).getTime() - new Date(b[category]).getTime()
        );
      }
      return new Date(b[category]).getTime() - new Date(a[category]).getTime();
    } else {
      // Compare numbers
      if (isAscending) {
        return a[category] - b[category];
      }
      return b[category] - a[category];
    }
  });
}
