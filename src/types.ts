export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface OccupationalHealthcareEntry {
  date: string;
  type: string;
  specialist: string;
  diagnoseCodes: string[];
  description: string;
  healthCheckRating: number;
  discharge?: {
    date: string;
    criteria: string;
  };
}

export interface ReturnedHealthEntry {
  _id?: string;
  date: string;
  type: string;
  specialist: string;
  diagnoseCodes: string[];
  description: string;
  healthCheckRating: number;
  discharge?: {
    date: string;
    criteria: string;
  };
}

export interface Patient {
  _id?: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;
