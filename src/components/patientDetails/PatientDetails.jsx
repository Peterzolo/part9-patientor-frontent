import React, { useState, useEffect } from "react";
import { getPatient } from "../../services/patients";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PatientDetails = () => {
  const { id } = useParams();

  const [patient, setPatient] = useState("");

  console.log("SINGLE PATIENT", patient);

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
    <Wrapper>
      <h2 className="patient-detail-title">Patient's Data</h2>
      <hr className="horizontal-rule" />
      <div className="item-wrap">
        <div className="item-title">Name</div>
        <div className="item">{patient.name}</div>
      </div>
      <div className="item-wrap">
        <div className="item-title">Occupation</div>
        <div className="item">{patient.occupation}</div>
      </div>
      <div className="item-wrap">
        <div className="item-title">Date of birth</div>
        <div className="item">{patient.dateOfBirth}</div>
      </div>
      <div className="item-wrap">
        <div className="item-title">Gender</div>
        <div className="item">{patient.gender}</div>
      </div>

      <h4 className="entries-header">Entries:</h4>

      {patient.entries &&
        patient.entries.map((entry) => (
          <div className="entry-wrap" key={entry._id}>
            <div className="entry-wrap" key={entry._id}>
              <div className="entry-title">Date</div>
              <div className="entry-item">{entry.date}</div>
            </div>
            <div className="entry-title">Description</div>
            <div className="entry-item">{entry.description}</div>
            {entry.diagnoseCodes &&
              entry.diagnoseCodes.map((item, index) => (
                <div key={index}>
                  <div className="diag-title">Diagnose Code</div>
                </div>
              ))}
          </div>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: lightgray;
  border-radius: 10px;
  .patient-detail-title {
    text-align: center;
    color: blue;
  }
  .horizontal-rule {
    height: 10px;
    background-color: #efeded;
    border: none;
  }
  .item-wrap {
    width: 80%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .entries-header {
    text-align: center;
    letter-spacing: 3px;
  }

  .entry-wrap {
    background-color: #f9e6e6;
    padding: 20px;
    /* display: flex; */
    justify-content: space-between;
    border-radius: 10px;
    .entry-title {
      font-weight: bold;
    }
  }
`;

export default PatientDetails;
