import express from 'express';
import { getEditedPatients, addPatient } from '../services/patientService';

const router = express.Router();

router.get('/', (_req,res) => {
    res.json(getEditedPatients());
});

router.post('/',(req,res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newPatient = addPatient({name,dateOfBirth,ssn,gender,occupation});
    res.json(newPatient);

});

export default router;