export type Severity = "Low" | "Medium" | "High" | "Critical"
export type Status   = "Open" | "Under Review" | "Resolved"

export interface Incident {
  id: string
  date: string
  location: string
  incidentType: string
  severity: Severity
  description: string
  reporterName: string
  status: Status
}

export const INCIDENTS: Incident[] = [
  { id:"INC-001", date:"2026-03-04", location:"Warehouse",  incidentType:"Near Miss",           severity:"High",     reporterName:"Arjun Reddy",    status:"Resolved",     description:"Forklift came within 1m of a worker in aisle 4 due to poor visibility." },
  { id:"INC-002", date:"2026-03-09", location:"Lab",        incidentType:"Unsafe Condition",     severity:"Medium",   reporterName:"Sneha Iyer",     status:"Resolved",     description:"Chemical storage cabinet left unlocked overnight in Lab B." },
  { id:"INC-003", date:"2026-03-15", location:"Outdoor",    incidentType:"Environmental Spill",  severity:"Critical", reporterName:"Ravi Kumar",     status:"Resolved",     description:"Hydraulic fluid leak from maintenance vehicle near drainage area." },
  { id:"INC-004", date:"2026-03-21", location:"Office",     incidentType:"Injury",               severity:"Low",      reporterName:"Divya Sharma",   status:"Resolved",     description:"Employee slipped on wet floor near pantry. Minor bruising on left knee." },
  { id:"INC-005", date:"2026-03-28", location:"Warehouse",  incidentType:"Property Damage",      severity:"Medium",   reporterName:"Kiran Rao",      status:"Resolved",     description:"Shelving unit collapsed in bay 2 due to overloading. No injuries." },
  { id:"INC-006", date:"2026-04-03", location:"Lab",        incidentType:"Near Miss",            severity:"High",     reporterName:"Priya Mehta",    status:"Resolved",     description:"Fume hood fan failure during acid experiment. Evacuated safely." },
  { id:"INC-007", date:"2026-04-08", location:"Outdoor",    incidentType:"Unsafe Condition",     severity:"Low",      reporterName:"Suresh Naidu",   status:"Resolved",     description:"Uneven paving near parking lot entrance creating trip hazard." },
  { id:"INC-008", date:"2026-04-14", location:"Warehouse",  incidentType:"Injury",               severity:"High",     reporterName:"Anjali Singh",   status:"Under Review", description:"Worker sustained wrist sprain while manually lifting 30kg package." },
  { id:"INC-009", date:"2026-04-19", location:"Office",     incidentType:"Near Miss",            severity:"Low",      reporterName:"Manoj Pillai",   status:"Resolved",     description:"Loose electrical cable spotted under workstation before any incident." },
  { id:"INC-010", date:"2026-04-25", location:"Lab",        incidentType:"Environmental Spill",  severity:"Medium",   reporterName:"Kavya Nair",     status:"Under Review", description:"Solvent spill of approx 2L inside Lab C. Contained within lab." },
  { id:"INC-011", date:"2026-05-02", location:"Warehouse",  incidentType:"Unsafe Condition",     severity:"Medium",   reporterName:"Rohit Das",      status:"Under Review", description:"Fire exit in bay 3 partially blocked by newly delivered stock." },
  { id:"INC-012", date:"2026-05-07", location:"Outdoor",    incidentType:"Property Damage",      severity:"Low",      reporterName:"Shalini Verma",  status:"Resolved",     description:"Company vehicle side mirror damaged in car park. No persons involved." },
  { id:"INC-013", date:"2026-05-10", location:"Lab",        incidentType:"Injury",               severity:"Critical", reporterName:"Naveen Krishnan",status:"Under Review", description:"Chemical splash to eyes during reagent transfer. First aid administered immediately." },
  { id:"INC-014", date:"2026-05-13", location:"Office",     incidentType:"Unsafe Condition",     severity:"Medium",   reporterName:"Deepa Rao",      status:"Open",         description:"Ceiling tile showing water damage and sagging above workstation row C." },
  { id:"INC-015", date:"2026-05-16", location:"Warehouse",  incidentType:"Near Miss",            severity:"High",     reporterName:"Arjun Reddy",    status:"Open",         description:"Pallet fell from height in rack system. No one in zone at the time." },
  { id:"INC-016", date:"2026-05-19", location:"Outdoor",    incidentType:"Environmental Spill",  severity:"High",     reporterName:"Ravi Kumar",     status:"Open",         description:"Diesel leak from generator near storm drain. Absorbent deployed." },
  { id:"INC-017", date:"2026-05-21", location:"Lab",        incidentType:"Near Miss",            severity:"Medium",   reporterName:"Sneha Iyer",     status:"Open",         description:"Autoclave door seal failed during cycle. No injuries but procedure halted." },
  { id:"INC-018", date:"2026-05-23", location:"Office",     incidentType:"Injury",               severity:"Low",      reporterName:"Divya Sharma",   status:"Open",         description:"Paper cut injury during document handling. Minor, treated with first aid kit." },
  { id:"INC-019", date:"2026-05-25", location:"Warehouse",  incidentType:"Property Damage",      severity:"Medium",   reporterName:"Kiran Rao",      status:"Open",         description:"Loading dock hydraulic lift malfunctioning. Out of service pending repair." },
  { id:"INC-020", date:"2026-05-27", location:"Lab",        incidentType:"Unsafe Condition",     severity:"Critical", reporterName:"Naveen Krishnan",status:"Open",         description:"Gas cylinder found unsecured and horizontal in Lab A storage room." },
]