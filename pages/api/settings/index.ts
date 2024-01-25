import type { NextApiRequest, NextApiResponse } from "next";
import { IInvestment } from "@/src/interfaces/IInvestment.interface";
import { IUser } from "@/src/interfaces/IUser.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser>
) {
  if (req.method === "PUT") {
    return res.status(200).json(req.body);
  } else {
    res.status(200).json({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      password: "",
      age: 30,
    });
  }
}
