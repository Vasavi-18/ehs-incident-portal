import { useState } from "react"
import Dashboard from "./components/Dashboard"

type Severity = "Low" | "Medium" | "High" | "Critical"
type FormState = {
  date: string; location: string; incidentType: string
  severity: Severity | ""; description: string; reporterName: string
}
const EMPTY: FormState = {
  date:"", location:"", incidentType:"",
  severity:"", description:"", reporterName:""
}
const severityColors: Record<Severity, string> = {
  Low:      "border-blue-400   bg-blue-50   text-blue-700",
  Medium:   "border-yellow-400 bg-yellow-50 text-yellow-700",
  High:     "border-orange-400 bg-orange-50 text-orange-700",
  Critical: "border-red-500    bg-red-50    text-red-700",
}

export default function App() {
  const [tab, setTab]             = useState<"form"|"dashboard">("form")
  const [form, setForm]           = useState<FormState>(EMPTY)
  const [errors, setErrors]       = useState<Record<string,string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.date)                           e.date         = "Date is required"
    if (!form.location)                       e.location     = "Location is required"
    if (!form.incidentType)                   e.incidentType = "Incident type is required"
    if (!form.severity)                       e.severity     = "Please select a severity"
    if (form.description.trim().length < 20)  e.description  = "Description must be at least 20 characters"
    if (!form.reporterName.trim())            e.reporterName = "Reporter name is required"
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
  }

  const handleReset = () => { setForm(EMPTY); setErrors({}); setSubmitted(false) }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── nav bar ── */}
      <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2 mr-4">
            <div className="w-7 h-7 bg-green-700 rounded-lg flex items-center
                            justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112
                     2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003
                     9c0 5.591 3.824 10.29 9 11.622 5.176-1.332
                     9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900 text-sm">EHS Portal</span>
          </div>
          <button onClick={() => setTab("form")}
            className={`text-sm font-medium pb-0.5 transition border-b-2
              ${tab === "form"
                ? "border-green-600 text-green-700"
                : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            Report Incident
          </button>
          <button onClick={() => setTab("dashboard")}
            className={`text-sm font-medium pb-0.5 transition border-b-2
              ${tab === "dashboard"
                ? "border-green-600 text-green-700"
                : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            Manager Dashboard
          </button>
        </div>
      </nav>

      {/* ── views ── */}
      {tab === "dashboard" ? <Dashboard /> : (

        submitted ? (
          <div className="flex items-center justify-center py-20 px-4">
            <div className="bg-white rounded-2xl shadow-md p-10 max-w-md
                            w-full text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex
                              items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Incident Reported
              </h2>
              <p className="text-gray-500 mb-6">
                Your incident has been submitted. The EHS team has been notified.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-left text-sm
                              text-gray-600 mb-6 space-y-1">
                <p><span className="font-medium">Reporter:</span> {form.reporterName}</p>
                <p><span className="font-medium">Location:</span> {form.location}</p>
                <p><span className="font-medium">Type:</span> {form.incidentType}</p>
                <p>
                  <span className="font-medium">Severity: </span>
                  <span className={`inline-block px-2 py-0.5 rounded-full
                    text-xs font-semibold border
                    ${severityColors[form.severity as Severity]}`}>
                    {form.severity}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={handleReset}
                  className="w-full bg-green-700 hover:bg-green-800 text-white
                             font-semibold py-2.5 rounded-xl transition">
                  Report Another Incident
                </button>
                <button onClick={() => setTab("dashboard")}
                  className="w-full border border-green-700 text-green-700
                             hover:bg-green-50 font-semibold py-2.5 rounded-xl
                             transition">
                  View Dashboard
                </button>
              </div>
            </div>
          </div>
        ) : (

          <div className="py-10 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Report an Incident
                </h1>
                <p className="text-gray-500 mt-1">
                  All fields marked <span className="text-red-500">*</span> are required.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border
                              border-gray-100 p-8 space-y-6">

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Date & Time of Incident <span className="text-red-500">*</span>
                  </label>
                  <input type="datetime-local" value={form.date}
                    onChange={e => setForm({...form, date:e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4
                               py-2.5 text-sm text-gray-700 focus:outline-none
                               focus:ring-2 focus:ring-green-500" />
                  {errors.date &&
                    <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <select value={form.location}
                    onChange={e => setForm({...form, location:e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4
                               py-2.5 text-sm text-gray-700 focus:outline-none
                               focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select location</option>
                    {["Office","Warehouse","Lab","Outdoor","Other"].map(l =>
                      <option key={l}>{l}</option>)}
                  </select>
                  {errors.location &&
                    <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                </div>

                {/* Incident Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Incident Type <span className="text-red-500">*</span>
                  </label>
                  <select value={form.incidentType}
                    onChange={e => setForm({...form, incidentType:e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4
                               py-2.5 text-sm text-gray-700 focus:outline-none
                               focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select incident type</option>
                    {["Near Miss","Injury","Property Damage",
                      "Environmental Spill","Unsafe Condition"].map(t =>
                      <option key={t}>{t}</option>)}
                  </select>
                  {errors.incidentType &&
                    <p className="text-red-500 text-xs mt-1">{errors.incidentType}</p>}
                </div>

                {/* Severity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Severity <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {(["Low","Medium","High","Critical"] as Severity[]).map(s => (
                      <label key={s}
                        className={`flex items-center justify-center border-2
                          rounded-xl py-2.5 cursor-pointer text-sm font-semibold
                          transition
                          ${form.severity === s
                            ? severityColors[s] + " border-current"
                            : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>
                        <input type="radio" name="severity" value={s}
                          className="hidden"
                          onChange={() => setForm({...form, severity:s})} />
                        {s}
                      </label>
                    ))}
                  </div>
                  {errors.severity &&
                    <p className="text-red-500 text-xs mt-1">{errors.severity}</p>}
                  <p className="text-xs text-gray-400 mt-1">
                    Critical = immediate danger to life or environment.
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea rows={4} value={form.description}
                    onChange={e => setForm({...form, description:e.target.value})}
                    placeholder="Describe what happened, where exactly, and any immediate actions taken..."
                    className="w-full border border-gray-200 rounded-xl px-4
                               py-2.5 text-sm text-gray-700 focus:outline-none
                               focus:ring-2 focus:ring-green-500 resize-none" />
                  <div className="flex justify-between mt-1">
                    {errors.description
                      ? <p className="text-red-500 text-xs">{errors.description}</p>
                      : <span />}
                    <p className={`text-xs ${form.description.length < 20
                      ? "text-gray-400" : "text-green-600"}`}>
                      {form.description.length} / 20 min chars
                    </p>
                  </div>
                </div>

                {/* Reporter Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Reporter Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={form.reporterName}
                    onChange={e => setForm({...form, reporterName:e.target.value})}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4
                               py-2.5 text-sm text-gray-700 focus:outline-none
                               focus:ring-2 focus:ring-green-500" />
                  {errors.reporterName &&
                    <p className="text-red-500 text-xs mt-1">{errors.reporterName}</p>}
                </div>

                {/* Submit */}
                <button onClick={handleSubmit}
                  className="w-full bg-green-700 hover:bg-green-800 active:scale-95
                             text-white font-semibold py-3 rounded-xl
                             transition-all text-sm">
                  Submit Incident Report
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6">
                EHS Incident Management Portal · Confidential · For internal use only
              </p>
            </div>
          </div>
        )
      )}
    </div>
  )
}