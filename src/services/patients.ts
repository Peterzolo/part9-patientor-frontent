import axios from "axios";
import {
  Diagnosis,
  OccupationalHealthcareEntry,
  Patient,
  PatientFormValues,
  ReturnedHealthEntry,
} from "../types";

import { apiBaseUrl } from "../constants";

export const getAllPatients = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

export const getPatient = async (id: string) => {
  try {
    const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createPatient = async (
  object: PatientFormValues
): Promise<Patient> => {
  try {
    const { data } = await axios.post<Patient>(
      `${apiBaseUrl}/patients/add`,
      object
    );

    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

export const addEntry = async (
  object: OccupationalHealthcareEntry,
  id: string
): Promise<ReturnedHealthEntry> => {
  try {
    const { data } = await axios.post<OccupationalHealthcareEntry>(
      `${apiBaseUrl}/patients/${id}/entries`,
      object
    );

    return data;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};

export const getAllDiagnosis = async () => {
  const { data } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnosis`);
  console.log("RESPONSE", data);
  return data;
};
