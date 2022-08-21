import express from 'express';
import { getEditedPatients, addPatient,getOnePatient } from '../services/patientService';
import { toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req,res) => {
    res.json(getEditedPatients());
});

router.get('/:id', (req,res) => {
    console.log('herere');
    const id = req.params.id;
    res.json(getOnePatient(id));
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
});

export default router;