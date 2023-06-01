import axios from "axios";
import { Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

export const getAllPatients = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

// const newUrl = "http://localhost:5000/api/patients/";

export const getPatient = async (id: string) => {
  console.log("GOT HERE", id);
  const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
  console.log("RESPONSE", data);

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
