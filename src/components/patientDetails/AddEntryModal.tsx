import React, { useState } from "react";
import { OccupationalHealthcareEntry } from "../../types";

interface AddEntryModalProps {
  onSubmit: (entry: OccupationalHealthcareEntry) => void;
  onClose: () => void;
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ onSubmit, onClose }) => {
  const [entry, setEntry] = useState<OccupationalHealthcareEntry>({
    date: "",
    type: "",
    specialist: "",
    diagnoseCodes: [],
    description: "",
    healthCheckRating: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: name === "diagnoseCodes" ? value.split(",") : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(entry);
  };

  return (
    <div>
      <h3>Add Entry</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={entry.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={entry.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Specialist:</label>
          <input
            type="text"
            name="specialist"
            value={entry.specialist}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={entry.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Health Check Rating:</label>
          <input
            type="number"
            name="healthCheckRating"
            value={entry.healthCheckRating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Entry</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEntryModal;
