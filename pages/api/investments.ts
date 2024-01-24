// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
    portfolio: {
      items: [
        {
          name: "BTC",
          value: 0.5,
        },
        {
          name: "ETH",
          value: 0.5,
        },
      ],
    },
  });
}
