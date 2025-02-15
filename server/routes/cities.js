import express from "express";
import { createCity, getCities, getCity } from "../controllers/cities.js";

const router = express.Router();

router.post("/", createCity);
router.get("/", getCities);
router.get("/:id", getCity);

export default router;
