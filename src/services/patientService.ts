import patientData from '../../data/patients.json';
import { PatientEdited, Patient, NewPatient } from '../types';
import { v4 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
    return patientData;
};

const getEditedPatients = (): PatientEdited[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
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
    patientData.push(newPatient);
    return newPatient;
};

export {getPatients,getEditedPatients,addPatient};
