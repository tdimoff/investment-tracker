import type { NextApiRequest, NextApiResponse } from "next";
import { IInvestment, IInvestmentItem } from "@/src/interfaces/IInvestment.interface";

const mockInvestments = {
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
    },
  ],
  portfolio: [
    {
      name: "BTC",
      value: 22000,
    },
    {
      name: "ETH",
      value: 1000,
    },
    {
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
      value: 55000,
      type: "crypto",
      status: "active",
      date: "2021-07-01",
    },
    {
      id: 2,
      name: "ETH",
      value: 10000,
      type: "crypto",
      status: "active",
      date: "2021-07-01",
    },
    {
      id: 3,
      name: "AAPL",
      value: 15000,
      type: "stock",
      status: "active",
      date: "2022-01-15",
    },
    {
      id: 4,
      name: "TSLA",
      value: 15000,
      type: "stock",
      status: "active",
      date: "2022-02-20",
    },
    {
      id: 5,
      name: "GOOGL",
      value: 15000,
      type: "stock",
      status: "active",
      date: "2022-03-05",
    },
    {
      id: 6,
      name: "AMZN",
      value: 15000,
      type: "stock",
      status: "closed",
      date: "2021-12-12",
    },
    {
      id: 10,
      name: "Silver",
      value: 15000,
      type: "commodity",
      status: "closed",
      date: "2021-09-09",
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IInvestment | IInvestmentItem>
) {
  if (req.method === "GET") {
    res.status(200).json(mockInvestments);
  } else if (req.method === "POST") {
    const { name, value, type, status, date } = req.body;
    
    const newInvestment: IInvestmentItem = {
      id: mockInvestments.investments.length + 1,
      name,
      value,
      type,
      status,
      date,
    };

    mockInvestments.investments.push(newInvestment as any);

    res.status(201).json(newInvestment);
  }
}
