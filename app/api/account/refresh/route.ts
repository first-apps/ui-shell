import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    isSuccess: true,
    data: {
      notify: false, // if token was not present
    },
  });
}
