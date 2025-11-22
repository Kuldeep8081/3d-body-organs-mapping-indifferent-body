# 🧠 3D Body Organs Mapping (Single Body Model | Multi-Organ Highlighting)

Live Demo → **https://3d-body-organs-mapping-indifferent.vercel.app/**  

This project visualizes **affected organs** inside a **single human-body 3D image**, based on each patient's symptoms or conditions.  
It uses a hotspot-based overlay system to highlight multiple organs at once on the same body.

Designed for:

- Medical UI prototypes  
- Patient dashboards  
- Diagnostic assistants  
- Educational anatomy tools  

---

## 📌 Features

- Single **3D anatomical body image** for all patients  
- Accurate hotspot mapping for each organ  
- Multiple affected organs highlight simultaneously  
- Patient selector with condition list  
- Easy-to-edit organ mapping file (`mappings.js`)  
- Clean and responsive layout  
- Fast deployment (Vite + React)

---

## 🧬 How It Works

### **1. Patients**
Each patient has:

- `id`
- `name`
- `age`
- `description`
- `conditions[]`

### **2. Conditions → Organs Mapping**
In `mappings.js`, each condition is mapped to one or more organs.

Example:

```js
"chest pain" → ["heart"]
"sharp abdominal pain" → ["stomach", "intestine"]
"shortness of breath" → ["lungs"]



