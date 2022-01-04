import express from "express";
import { home, store, edit, update, destroy } from "./controller/page";

const router = express.Router();

//get all
router.get("/", home);

//create
router.post("/create", store);

//get one by id
router.get("/edit/:id", edit);

//update base on id
router.patch("/update/:id", update);

//delete
router.get("/delete/:id", destroy);

export default router;
