import express from 'express';
import { getEditedPatients, addPatient } from '../services/patientService';
import { toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req,res) => {
    res.json(getEditedPatients());
});

router.post('/',(req,res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const newPatient = addPatient(newPatientEntry);
        res.json(newPatient);
    }
    catch(err: unknown) {
        let errorMsg = 'Something went wrong. ';
        if(err instanceof Error) {
            errorMsg += `Error: ${err.message}`;
        }
        res.status(404).json({error: errorMsg});
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // const newPatient = addPatient({name,dateOfBirth,ssn,gender,occupation});
    // res.json(newPatient);

});

export default router;