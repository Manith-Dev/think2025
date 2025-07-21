import express from 'express'
import { CreateNotes, DeleteNotes, GetAllnote, UpdateNotes } from '../Controller/notesController.js';
const router = express.Router();

// This we call end Point
router.get("/", GetAllnote)

router.post("/", CreateNotes)

router.post("/", UpdateNotes)

router.post("/", DeleteNotes)



export default router;