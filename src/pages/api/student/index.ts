// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { userDetails } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("request");
  try {
    if (req.method === "GET") res.status(200).json(userDetails.students);
  } catch (error) {
    res.status(400).json({ msg: "Error raise in the backend" });
  }
}
