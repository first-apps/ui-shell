import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function handler(req: NextApiRequest) {
  if (req.method === "GET") {
    return NextResponse.json(
      {
        isSuccess: true,
      },
      { status: 200 }
    );
  }
}
