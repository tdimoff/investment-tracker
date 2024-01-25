import type { NextApiRequest, NextApiResponse } from "next";
import { IInvestment } from "@/src/interfaces/IInvestment.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: Boolean }>
) {
  res.status(200).json({ ok: true });
}
