import type { NextApiRequest, NextApiResponse } from "next";
import { userDetails } from "../../../data/index";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("request-----------------------", req);
  const user = req.body;
  if (req.method === "GET") {
    res.status(200).json(userDetails);
  }
  //   Post method
  else if (req.method === "POST") {
    console.log("POST method", req.body);
    // const newUser = { ...req.body, id: 4 };
    // userDetails.push(newUser);
    // res.status(200).json({ msg: "user added Successfull" });

    console.log(user.user_name, user.password);
    if (user.user_name && user.password) {
      const result = userDetails.users.filter(
        (each) =>
          each.user_name === user.user_name && each.password === user.password
      );
      console.log(result);
      if (result.length > 0) {
        const jwtToken = jwt.sign(result[0], "Code");
        res.status(200).json({ jwt: jwtToken });
      } else {
        res
          .status(404)
          .json({ msg: "User details and password are not matched" });
      }
    } else {
      res.status(404).json({ msg: "User details or not founded" });
    }
  }
  //
}
