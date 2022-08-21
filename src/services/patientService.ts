import patientEntries from '../../data/patients';
import { PatientEdited, Patient, NewPatient } from '../types';
import { v4 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
    return patientEntries;
};

const getOnePatient = (id: string): Patient | undefined => {
    const patient = patientEntries.find(a => a.id = id);
    return patient;
};

const getEditedPatients = (): PatientEdited[] => {
    return patientEntries.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name, 
        dateOfBirth,
        gender,
        occupation,
        entries:[]
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

export {getPatients,getEditedPatients,addPatient,getOnePatient};
