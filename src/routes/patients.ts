import express from 'express';
import { getEditedPatients } from '../services/patientService';

const router = express.Router();

router.get('/', (_req,res) => {
    res.json(getEditedPatients());
});

export default router;