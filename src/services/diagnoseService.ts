import diagnoseData from '../../data/diagnoses.json'
import { DiagnoseEntry } from '../types'

const diagnoses: Array<DiagnoseEntry> = diagnoseData;

const getDiagnoses = () => {
    return diagnoses;
}

export {getDiagnoses}