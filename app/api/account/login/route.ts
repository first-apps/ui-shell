import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    name: "John Doe",
    email: "john@doe.com",
    accessToken: "test-token",
    refreshToken: "test-token",
  });
}
