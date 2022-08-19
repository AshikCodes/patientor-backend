import patientEntries from '../../data/patients';
import { PatientEdited, Patient, NewPatient } from '../types';
import { v4 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
    return patientEntries;
};

const getEditedPatients = (): PatientEdited[] => {
    return patientEntries.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name, 
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (entry: NewPatient): Patient => {
    const newPatient = {
        id: uuid(),
        ...entry
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    patientEntries.push(newPatient);
    return newPatient;
};

export {getPatients,getEditedPatients,addPatient};
