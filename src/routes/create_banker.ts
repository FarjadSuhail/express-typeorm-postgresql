import express from "express";
import { Banker } from "../entities/Banker";
const router = express.Router();

router.post("/api/banker", async (req, res) => {
  //   res.send("hello");
  const { first_name, last_name, email, card_number, employeenumber } =
    req.body;
  //   console.log(req.body);
  const banker = Banker.create({
    first_name,
    last_name,
    email,
    card_number,
    employeenumber,
  });

  await banker.save();
  return res.json(banker).status(200);
});

export { router as createBankerRouter };
