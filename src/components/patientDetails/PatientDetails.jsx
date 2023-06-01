import React, { useState, useEffect } from "react";
import { getPatient } from "../../services/patients";
import { useParams } from "react-router-dom";

const PatientDetails = () => {
  const { id } = useParams();

  console.log("HGHGHGHG", id);

  const [patient, setPatient] = useState("");

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
  }, [id]);

  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
};

export default PatientDetails;
