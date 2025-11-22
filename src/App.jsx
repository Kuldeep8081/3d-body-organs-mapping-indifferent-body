// src/App.jsx

import React, { useMemo, useState } from "react";
import { patients } from "./data/patients";
import { conditionToOrgansMap } from "./data/mappings";
import PatientPanel from "./components/PatientPanel";
import AffectedOrgansGrid from "./components/AffectedOrgansGrid";

function getOrgansForPatient(patient) {
  const organsSet = new Set();

  patient.conditions.forEach((condition) => {
    const mapped = conditionToOrgansMap[condition] || [];
    mapped.forEach((orgId) => organsSet.add(orgId));
  });

  return Array.from(organsSet);
}

const App = () => {
  const [selectedPatientId, setSelectedPatientId] = useState(patients[0].id);

  const selectedPatient = useMemo(
    () => patients.find((p) => p.id === selectedPatientId),
    [selectedPatientId]
  );

  const highlightedOrgans = useMemo(
    () => getOrgansForPatient(selectedPatient),
    [selectedPatient]
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Organ Mapping from Patient Conditions</h1>
        <p className="subtitle">
          Select a patient to see which organs are affected, visualized using
          3D organ images.
        </p>
      </header>

      <main className="layout">
        <PatientPanel
          patients={patients}
          selectedPatient={selectedPatient}
          onChangePatient={setSelectedPatientId}
        />

        <section className="panel">
          <h2 className="panel-title">Affected Organs (3D Images)</h2>
          <AffectedOrgansGrid organs={highlightedOrgans} />
        </section>
      </main>
    </div>
  );
};

export default App;
