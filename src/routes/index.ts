import express from "express";
import { getImage } from "../controller/imageController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Api is running");
});

router.get("/image", getImage);

export default router;
