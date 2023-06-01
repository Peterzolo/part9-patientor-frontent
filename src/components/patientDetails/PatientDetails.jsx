import React, { useState, useEffect } from "react";
import { getPatient } from "../../services/patients";

const PatientDetails = () => {
  const [patient, setPatient] = useState("");
  console.log(patient);

  useEffect(() => {
    const fetchPatient = async () => {
      const data = await getPatient();
      setPatient(data);
    };
    fetchPatient();
  }, []);

  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
};

export default PatientDetails;
