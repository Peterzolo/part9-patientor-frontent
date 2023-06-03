import React, { useState } from "react";

const AddEntryModal = ({ onClose, onSubmit }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [diagnoseCodes, setDiagnoseCodes] = useState([]);
  const [description, setDescription] = useState("");

  const handleDiagnoseCodesChange = (e) => {
    const codes = e.target.value.split(",");
    setDiagnoseCodes(codes.map((code) => code.trim()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      date,
      type,
      specialist,
      diagnoseCodes,
      description,
    };
    onSubmit(entry);
  };

  return (
    <div>
      <h3>Add Entry</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label>Specialist:</label>
          <input
            type="text"
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
          />
        </div>
        <div>
          <label>Diagnose Codes (comma-separated):</label>
          <input
            type="text"
            value={diagnoseCodes.join(", ")}
            onChange={handleDiagnoseCodesChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
