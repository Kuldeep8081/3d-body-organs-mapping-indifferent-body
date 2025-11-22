// src/components/PatientPanel.jsx

import React from "react";

const PatientPanel = ({ patients, selectedPatient, onChangePatient }) => {
  return (
    <section className="panel">
      <h2 className="panel-title">Patient Details</h2>

      <label className="field-label" htmlFor="patient-select">
        Select patient:
      </label>
      <select
        id="patient-select"
        className="select"
        value={selectedPatient.id}
        onChange={(e) => onChangePatient(Number(e.target.value))}
      >
        {patients.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} (ID: {p.id})
          </option>
        ))}
      </select>

      <div className="patient-card">
        <p>
          <strong>Name:</strong> {selectedPatient.name}
        </p>
        <p>
          <strong>Age:</strong> {selectedPatient.age}
        </p>
        <p>
          <strong>Summary:</strong> {selectedPatient.description}
        </p>
      </div>

      <div className="conditions">
        <h3>Conditions / Symptoms</h3>
        <ul>
          {selectedPatient.conditions.map((cond) => (
            <li key={cond}>{cond}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PatientPanel;
