import express from 'express'
import { displayData, getData } from '../controllers/displayDataController.js';

const router=express.Router();

router.get("/filter",displayData);

router.get("/",getData)


export default router;