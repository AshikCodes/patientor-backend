import patientData from '../../data/patients.json';
import { PatientEdited, Patient } from '../types';


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

export {getPatients,getEditedPatients};
