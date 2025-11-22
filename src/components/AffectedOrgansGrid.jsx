// src/components/AffectedOrgansGrid.jsx

import React from "react";
import { ORGANS } from "../data/mappings";

import heartImg from "../assets/heart.png";
import lungsImg from "../assets/lungs.png";
import stomachImg from "../assets/stomach.png";
import intestineImg from "../assets/intestine.png";
import pancreasImg from "../assets/pancreas.png";

const ORGAN_META = {
  [ORGANS.HEART]: { label: "Heart", image: heartImg },
  [ORGANS.LUNGS]: { label: "Lungs", image: lungsImg },
  [ORGANS.STOMACH]: { label: "Stomach", image: stomachImg },
  [ORGANS.INTESTINE]: { label: "Intestine", image: intestineImg },
  [ORGANS.PANCREAS]: { label: "Pancreas", image: pancreasImg },
};

const AffectedOrgansGrid = ({ organs }) => {
  if (!organs.length) {
    return <p className="muted">No mapped organs for this patient.</p>;
  }

  return (
    <div className="organs-grid">
      {organs.map((id) => {
        const meta = ORGAN_META[id];
        if (!meta) return null;

        return (
          <div key={id} className="organ-card">
            <div className="organ-image-wrapper">
              <img
                src={meta.image}
                alt={meta.label}
                className="organ-image"
              />
            </div>
            <div className="organ-info">
              <h4>{meta.label}</h4>
              <p className="organ-tag">Affected</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AffectedOrgansGrid;
