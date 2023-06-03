import React, { useState, useEffect } from "react";
import { getPatient } from "../../services/patients";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Entry from "./Entry";
import AddEntryModal from "./AddEntryModal";

const PatientDetails = () => {
  const { id } = useParams();

  const [patient, setPatient] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("DETAILS OF PATIENTS", patient);

  const openModal = () => {
    setIsModalOpen(true);
  };

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
      <div className="add-entry-wrap">
        <button className="add-entry-btn" onClick={openModal}>
          Add Entry
        </button>{" "}
      </div>
      {isModalOpen && <AddEntryModal onClose={() => setIsModalOpen(false)} />}{" "}
      <div className="entry-container">
        <Entry entries={patient.entries} />
      </div>
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
  .add-entry-wrap {
    display: flex;
    justify-content: flex-end;
    .add-entry-btn {
      background-color: #0958d9;
      color: white;
      border: none;
      padding: 10px;
      width: 100px;
      border-radius: 10px;
    }
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
