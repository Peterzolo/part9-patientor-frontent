import axios from "axios";
import { Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

export const getAllPatients = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

export const getPatient = async (patientId: string) => {
  const { data } = await axios.get<Patient>(
    `${apiBaseUrl}/patients/${patientId}`
  );

  return data;
};

export const createPatient = async (
  object: PatientFormValues
): Promise<Patient> => {
  try {
    const { data } = await axios.post<Patient>(
      `${apiBaseUrl}/patients/add`,
      object
    );
    console.log("DATA", data);
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
