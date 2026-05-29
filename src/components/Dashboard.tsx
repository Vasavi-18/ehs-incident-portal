import { useState } from "react"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts"
import { INCIDENTS, type Incident, type Severity, type Status } from "../data/incidents"

const SEVERITY_COLOR: Record<Severity, string> = {
  Low:      "bg-blue-100   text-blue-700",
  Medium:   "bg-yellow-100 text-yellow-700",
  High:     "bg-orange-100 text-orange-700",
  Critical: "bg-red-100    text-red-700",
}
const STATUS_COLOR: Record<Status, string> = {
  "Open":          "bg-red-50    text-red-600   border border-red-200",
  "Under Review":  "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "Resolved":      "bg-green-50  text-green-700  border border-green-200",
}
const PIE_COLORS = ["#3B82F6","#EAB308","#F97316","#EF4444"]

export default function Dashboard() {
  const [incidents, setIncidents] = useState<Incident[]>(INCIDENTS)
  const [filterSeverity, setFilterSeverity] = useState("All")
  const [filterStatus,   setFilterStatus]   = useState("All")

  // ── summary counts ──────────────────────────────────────────────────────────
  const total       = incidents.length
  const open        = incidents.filter(i => i.status === "Open").length
  const underReview = incidents.filter(i => i.status === "Under Review").length
  const resolved    = incidents.filter(i => i.status === "Resolved").length

  // ── filtered table rows ─────────────────────────────────────────────────────
  const filtered = incidents.filter(i => {
    const bySeverity = filterSeverity === "All" || i.severity === filterSeverity
    const byStatus   = filterStatus   === "All" || i.status   === filterStatus
    return bySeverity && byStatus
  })

  // ── chart data ──────────────────────────────────────────────────────────────
  const types = ["Near Miss","Injury","Property Damage","Environmental Spill","Unsafe Condition"]
  const barData = types.map(t => ({
    name: t.replace(" ", "\n"),
    count: incidents.filter(i => i.incidentType === t).length
  }))

  const severities: Severity[] = ["Low","Medium","High","Critical"]
  const pieData = severities.map(s => ({
    name: s,
    value: incidents.filter(i => i.severity === s).length
  }))

  // ── status update ───────────────────────────────────────────────────────────
  const updateStatus = (id: string, status: Status) => {
    setIncidents(prev =>
      prev.map(i => i.id === id ? { ...i, status } : i)
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ── page header ── */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">EHS Manager Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Real-time incident tracking and compliance overview
          </p>
        </div>

        {/* ── summary cards ── */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label:"Total Incidents", value:total,       color:"border-l-4 border-gray-400",   text:"text-gray-700"  },
            { label:"Open",            value:open,        color:"border-l-4 border-red-400",    text:"text-red-600"   },
            { label:"Under Review",    value:underReview, color:"border-l-4 border-yellow-400", text:"text-yellow-600"},
            { label:"Resolved",        value:resolved,    color:"border-l-4 border-green-500",  text:"text-green-700" },
          ].map(c => (
            <div key={c.label}
              className={`bg-white rounded-xl shadow-sm p-5 ${c.color}`}>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                {c.label}
              </p>
              <p className={`text-4xl font-bold ${c.text}`}>{c.value}</p>
            </div>
          ))}
        </div>

        {/* ── charts ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* bar chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Incidents by Type
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData} margin={{ top:0, right:10, left:-20, bottom:40 }}>
                <XAxis dataKey="name" tick={{ fontSize:11 }} angle={-25} textAnchor="end" />
                <YAxis tick={{ fontSize:11 }} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#15803D" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* pie chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Severity Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80}
                  dataKey="value" label={({ name, value }) => `${name}: ${value}`}
                  labelLine={false}>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── incidents table ── */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

          {/* table header + filters */}
          <div className="px-6 py-4 border-b border-gray-100 flex flex-wrap gap-3
                          items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-700">
              All Incidents
              <span className="ml-2 text-xs font-normal text-gray-400">
                {filtered.length} of {total} shown
              </span>
            </h2>
            <div className="flex gap-3 flex-wrap">
              {/* severity filter */}
              <select value={filterSeverity}
                onChange={e => setFilterSeverity(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5
                           text-gray-600 focus:outline-none focus:ring-2
                           focus:ring-green-500 bg-white">
                {["All","Low","Medium","High","Critical"].map(v =>
                  <option key={v}>{v === "All" ? "All Severities" : v}</option>
                )}
              </select>
              {/* status filter */}
              <select value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5
                           text-gray-600 focus:outline-none focus:ring-2
                           focus:ring-green-500 bg-white">
                {["All","Open","Under Review","Resolved"].map(v =>
                  <option key={v}>{v === "All" ? "All Statuses" : v}</option>
                )}
              </select>
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                <tr>
                  {["ID","Date","Location","Type","Severity","Reporter","Status","Action"]
                    .map(h => (
                    <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map(inc => (
                  <tr key={inc.id}
                    className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">
                      {inc.id}
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {inc.date}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{inc.location}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {inc.incidentType}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full
                        text-xs font-semibold ${SEVERITY_COLOR[inc.severity]}`}>
                        {inc.severity}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {inc.reporterName}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full
                        text-xs font-medium ${STATUS_COLOR[inc.status]}`}>
                        {inc.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={inc.status}
                        onChange={e =>
                          updateStatus(inc.id, e.target.value as Status)}
                        className="text-xs border border-gray-200 rounded-lg
                                   px-2 py-1 text-gray-600 focus:outline-none
                                   focus:ring-2 focus:ring-green-500 bg-white">
                        {(["Open","Under Review","Resolved"] as Status[])
                          .map(s => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-12 text-center text-gray-400 text-sm">
                No incidents match the selected filters.
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400">
          EHS Incident Management Portal · Manager View · Confidential
        </p>
      </div>
    </div>
  )
}