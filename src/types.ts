export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string, 
    gender: Gender,
    occupation: string,
    entries: Entry[]
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;

export enum Gender {
    Male = 'male',
    Female = 'female'
}

export type PatientEdited = Omit<Patient,'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;