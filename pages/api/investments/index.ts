import type { NextApiRequest, NextApiResponse } from "next";
import { IInvestment } from "@/src/interfaces/IInvestment.interface";

type Data = {
  data: IInvestment[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IInvestment>
) {
  res.status(200).json({
    investedValue: [
      {
        period: "Jan",
        value: 100,
      },
      {
        period: "Feb",
        value: 200,
      },
      {
        period: "Mar",
        value: 165,
      },
      {
        period: "Apr",
        value: 170,
      },
      {
        period: "May",
        value: 335,
      }
    ],
    portfolio: [
      {
        name: "BTC",
        value: 22000,
      },
      {
        name: "ETH",
        value: 1000,
      },      {
        name: "AAPL",
        value: 50000,
      },
      {
        name: "TSLA",
        value: 35000,
      },
      {
        name: "GOOGL",
        value: 16534,
      },
      {
        name: "AMZN",
        value: 32000,
      },
      {
        name: "Silver",
        value: 1500,
      },
    ],
    activeClosed: [
      {
        name: "Active",
        value: 5,
      },
      {
        name: "Closed",
        value: 2,
      },
    ],
    investments: [
      {
        id: 1,
        name: "BTC",
        value: 0.5,
        type: "crypto",
        status: "active",
        date: "2021-07-01",
      },
      {
        id: 2,
        name: "ETH",
        value: 0.5,
        type: "crypto",
        status: "active",
        date: "2021-07-01",
      },
      {
        id: 3,
        name: "AAPL",
        value: 0.3,
        type: "stock",
        status: "active",
        date: "2022-01-15",
      },
      {
        id: 4,
        name: "TSLA",
        value: 0.2,
        type: "stock",
        status: "active",
        date: "2022-02-20",
      },
      {
        id: 5,
        name: "GOOGL",
        value: 0.15,
        type: "stock",
        status: "active",
        date: "2022-03-05",
      },
      {
        id: 6,
        name: "AMZN",
        value: 0.25,
        type: "stock",
        status: "closed",
        date: "2021-12-12",
      },
      {
        id: 10,
        name: "Silver",
        value: 0.5,
        type: "commodity",
        status: "closed",
        date: "2021-09-09",
      },
    ],
  });
}
