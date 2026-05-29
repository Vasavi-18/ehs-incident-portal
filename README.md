# EHS Incident Management & Compliance Tracking Portal

> A full-lifecycle IT Business Analyst portfolio project — from requirements gathering through to deployed web application.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ehs--incident--portal.vercel.app-1A7A5E?style=for-the-badge&logo=vercel)](https://ehs-incident-portal.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

---

## About This Project

Manufacturing and enterprise organisations operate under strict **Environmental, Health and Safety (EHS)** regulatory requirements. At many facilities, incident reporting still relies on informal channels — WhatsApp messages, manual Excel logging, and monthly-only management reviews — creating compliance risk, delayed response, and incomplete data.

This project simulates a real enterprise IT-EHS initiative from end to end. It was built to demonstrate the complete work of an **IT Business Analyst**: stakeholder engagement, requirements documentation, process design, system build, quality assurance, and knowledge transfer — not just the code.

**The system replaces a 5-step manual process with a real-time digital workflow:**

```
BEFORE  Employee → WhatsApp → Supervisor → Excel (weekly) → EHS Manager (monthly)
AFTER   Employee → EHS Portal → Auto-notify → EHS Manager (live dashboard)
```

---

## Live Demo

**[ehs-incident-portal.vercel.app](https://ehs-incident-portal.vercel.app)**

| View | What to try |
|---|---|
| **Report Incident tab** | Fill the form and submit — see the confirmation screen |
| **Manager Dashboard tab** | View live charts, filter by severity/status, update incident status |
| **Validation** | Click Submit with empty fields — see inline error messages |
| **Status update** | Change any row's status from Open → Resolved in the Action column |

---

## BA Artifacts — Full Project Documentation

This repository includes the complete Business Analyst documentation produced alongside the application. Every document maps directly to a responsibility in the target IT Analyst role.

| Document | Description | JD Mapping |
|---|---|---|
| [`/docs/MOM-Requirements-Gathering.docx`](./docs/) | Minutes of Meeting from stakeholder requirements session — pain points, desired outcomes, decisions, action items | Requirement-gathering workshops |
| [`/docs/AsIs-Process-Map.png`](./docs/) | Swimlane diagram of the current manual EHS incident reporting process with 5 pain points annotated | Current-state process documentation |
| [`/docs/ToBe-Process-Map.png`](./docs/) | Swimlane diagram of the future system-driven workflow with 4 improvement markers | Future-state process design |
| [`/docs/BRD-EHS-Portal.docx`](./docs/) | Business Requirements Document — 8 sections including 8 functional and 5 non-functional requirements, stakeholder register, scope, sign-off | BRD and functional specifications |
| [`/docs/UAT-Test-Scenarios.xlsx`](./docs/) | 12 UAT test scenarios with pre-conditions, steps, expected results, defect log, and UAT sign-off summary | UAT and defect resolution |
| [`/docs/Training-Guide-Coordinator.docx`](./docs/) | Step-by-step user guide for EHS Coordinators — form walkthrough, severity guide, FAQ, quick reference card | Training materials and knowledge transfer |
| [`/docs/Training-Guide-Manager.docx`](./docs/) | Dashboard user guide for EHS Managers — daily review workflow, filter usage, chart interpretation, compliance export | Training materials and knowledge transfer |

---

## Features

### Employee — Incident Submission Form
- Structured form with 6 mandatory fields: date/time, location, incident type, severity, description, reporter name
- Severity classification with colour-coded radio buttons: Low / Medium / High / Critical
- Real-time field validation — inline error messages on missing or invalid input
- Character counter on description (20-character minimum enforced)
- Green confirmation screen on successful submission with incident summary

### EHS Manager — Live Dashboard
- 4 summary cards: Total Incidents | Open | Under Review | Resolved — updated in real time
- Incidents table with colour-coded severity badges and status badges
- Two-filter system: filter by severity and status simultaneously
- Live row counter showing filtered vs total incidents
- Status lifecycle management — update any incident from Open → Under Review → Resolved via dropdown
- Bar chart: incident count by type (5 categories)
- Pie chart: severity breakdown (Low / Medium / High / Critical)

---

## Project Methodology

This project was delivered using an **Agile/Scrum approach**:

- Managed via GitHub Projects Kanban board with a prioritised backlog
- Delivered across 2 sprints (2-week cadence)
- Sprint 1: BA documentation + incident submission form
- Sprint 2: Dashboard, charts, UAT, training materials, deployment

**Full project lifecycle covered:**
Requirements → Process Design → Solution Build → Testing → Deployment → Training

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 + TypeScript |
| Styling | Tailwind CSS v3 |
| Data Visualisation | Recharts |
| Build Tool | Vite |
| Deployment | Vercel |
| Version Control | Git + GitHub |
| BA Documentation | draw.io, Google Docs, Microsoft Word |
| Project Management | GitHub Projects (Agile/Kanban) |

---

## Project Structure

```
ehs-incident-portal/
├── src/
│   ├── components/
│   │   └── Dashboard.tsx        ← EHS Manager dashboard
│   ├── data/
│   │   └── incidents.ts         ← 20 seed incidents with types/severities/statuses
│   └── App.tsx                  ← Navigation + incident submission form
├── docs/
│   ├── MOM-Requirements-Gathering.docx
│   ├── AsIs-Process-Map.png
│   ├── ToBe-Process-Map.png
│   ├── BRD-EHS-Portal.docx
│   ├── UAT-Test-Scenarios.xlsx
│   ├── Training-Guide-Coordinator.docx
│   └── Training-Guide-Manager.docx
├── public/
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/Vasavi-18/ehs-incident-portal.git
cd ehs-incident-portal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## UAT Results Summary

| Metric | Result |
|---|---|
| Total test cases | 12 |
| Passed | 12 |
| Failed | 0 |
| Defects found | 3 |
| Defects resolved | 3 |
| **Overall UAT status** | **PASS ✅** |

Full test scenarios and defect log: [`/docs/UAT-Test-Scenarios.xlsx`](./docs/)

---

## Interview Context

This project was designed to demonstrate the IT Business Analyst skillset required for enterprise EA and EHS-focused IT roles. Every artifact in this repository maps to a specific JD responsibility:

> *"Conducted structured requirements-gathering sessions simulating EHS stakeholder interviews; documented findings in a BRD with 8 functional and 5 non-functional requirements; mapped As-Is and To-Be processes using swimlane diagrams; built and deployed the solution using React, TypeScript, and TailwindCSS; authored 12 UAT test scenarios and resolved 3 defects; created role-based training materials for EHS Coordinator and Manager personas — all delivered within a 4-week Agile sprint model."*

---

## Author

**Vasavi Chinnala**
IT Business Analyst | Computer Science Graduate | Hyderabad, India

[![LinkedIn](https://img.shields.io/badge/LinkedIn-vasavi--chinnala18-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/vasavi-chinnala18)
[![GitHub](https://img.shields.io/badge/GitHub-Vasavi--18-181717?style=flat&logo=github)](https://github.com/Vasavi-18)

---

*Built as a portfolio project for IT EA EHS Analyst roles. All stakeholder names and incident data are fictional and used for demonstration purposes only.*
