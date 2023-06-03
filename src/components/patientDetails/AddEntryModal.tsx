import React, { useState } from "react";
import { OccupationalHealthcareEntry } from "../../types";
import styled from "styled-components";
import { addEntry } from "../../services/patients";
import { useParams } from "react-router-dom";

interface AddEntryModalProps {
  onSubmit: (entry: OccupationalHealthcareEntry) => void;
  onClose: () => void;
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ onSubmit, onClose }) => {
  const [error, setError] = useState<string | null>(null);
  const [entry, setEntry] = useState<OccupationalHealthcareEntry>({
    date: "",
    type: "",
    specialist: "",
    diagnoseCodes: [],
    description: "",
    healthCheckRating: 0,
  });

  const { id } = useParams();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: name === "diagnoseCodes" ? value.split(",") : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const addedEntry = await addEntry(entry, id as string);
      console.log("Added entry:", addedEntry);
      onClose();
    } catch (error: any) {
      setError("Error adding entry: " + error.message);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AddModalWrap>
      <h3 className="add-entry-title">Add Entry</h3>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div className="input-wrap">
          <label>Date:</label>
          <input
            className="input"
            type="date"
            name="date"
            value={entry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrap">
          <label>Type:</label>
          <input
            className="input"
            type="text"
            name="type"
            value={entry.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrap">
          <label>Specialist:</label>
          <input
            className="input"
            type="text"
            name="specialist"
            value={entry.specialist}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrap">
          <label>Health Check Rating:</label>
          <input
            className="input"
            type="number"
            name="healthCheckRating"
            value={entry.healthCheckRating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrap">
          <label>diagnoseCodes:</label>
          <input
            className="input"
            type="text"
            name="diagnoseCodes"
            value={entry.diagnoseCodes}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrap">
          <label>Description:</label>
          <textarea
            className="text-area"
            name="description"
            value={entry.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="add-btn-wrap">
          <button type="submit" className="add-btn">
            Add Entry
          </button>
          <button type="button" className="close-btn" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </form>
    </AddModalWrap>
  );
};

const AddModalWrap = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;

  .add-entry-title {
    text-align: center;
    color: #262726;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 10px;
    .input {
      margin-top: 5px;
      padding: 10px;
      border-radius: 10px;
      border: none;
    }
    .text-area {
      margin-top: 5px;
      padding: 10px;
      border-radius: 10px;
      border: none;
    }
  }
  .add-btn-wrap {
    margin-top: 15px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .add-btn {
      background-color: #002c8c;
      color: white;
      padding: 10px;
      border-radius: 10px;
      border: none;
    }
    .close-btn {
      background-color: #de0f0f;
      color: #f5f5f5;
      padding: 10px;
      border-radius: 10px;
      border: none;
    }
  }
`;

export default AddEntryModal;
