import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: Boolean }>
) {
  res.status(200).json({
    ...req.body,
    status: 'closed'
  });
}
