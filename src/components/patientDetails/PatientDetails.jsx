import React, { useState, useEffect } from "react";
import { getPatient } from "../../services/patients";
import { useParams } from "react-router-dom";

const PatientDetails = () => {
  const params = useParams();
  const id = params;
  console.log("ID", id);
  const [patient, setPatient] = useState("");
  console.log(patient);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatient(id);
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
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
