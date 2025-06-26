import React, { useState } from "react";
import clsx from "clsx";
import Title from "../../resuable/title";

const data = [
  {
    label: "TranscriptX",
    examples: [
      {
        title: "Experience TranscriptX - Effortless, Accurate Medical Transcription",
        beforeTitle: "Doctor's Dictation (Audio Input Simulation)",
        beforePanel: `"Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today, October 26th, 2023. Chief complaint... uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs. Subjective: Patient describes the pain as a dull ache, located medially. Rates it a 6/10 currently...`,
        afterTitle: "TranscriptX - AI-Generated Note",
        afterPanel: `Patient: Sarah Chen\nDOB: 03/22/1978\nDate of Service: October 26, 2023\nChief Complaint: Right knee pain x 3 months.\n...\nPlan: X-ray, NSAIDs, PT, possible ortho referral.`
      },
      {
        title: "TranscriptX - Pediatric Visit Sample",
        beforeTitle: "Pediatric Visit",
        beforePanel: `"Patient is 5-year-old male, presenting with cough and fever for 3 days..."`,
        afterTitle: "TranscriptX - Pediatric AI Summary",
        afterPanel: `Patient: Male, 5 years\nSymptoms: Cough, Fever 3 days\nPlan: Acetaminophen, rest, fluids`
      }
    ]
  },
  {
    label: "Chartwright",
    examples: [
      {
        title: "Dental Visit Summary",
        beforeTitle: "Raw Notes",
        beforePanel: `"Patient presents for cleaning, notes bleeding gums..."`,
        afterTitle: "AI Summary",
        afterPanel: `Assessment: Gingivitis suspected\nPlan: Oral hygiene, scaling scheduled`
      }
    ]
  },
  {
    label: "Redactify",
    examples: [
      {
        title: "Redaction Example",
        beforeTitle: "Unredacted Text",
        beforePanel: `"John Doe, SSN 123-45-6789, was seen at..."`,
        afterTitle: "Redacted Text",
        afterPanel: `"REDACTED, SSN XXX-XX-XXXX, was seen at..."`
      }
    ]
  }
];

export default function SolutionsInAction() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeExample, setActiveExample] = useState(0);


  const tool = data[activeTab];
  const example = tool.examples[activeExample];

  return (
    <section className="bg-[#0f172a] text-white py-16 px-4">
       <Title className={"mb-2"} title={"See Our Solutions in Action"}/>

      {/* Main Tabs */}
      <div className="flex space-x-4 max-w-xl mx-auto justify-center mb-2">
        {data.map((item, index) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveTab(index);
              setActiveExample(0);
            }}
            className={clsx(
              "py-2 px-4 font-semibold border-b-4",
              index === activeTab
                ? "border-blue-500 text-white"
                : "border-transparent text-gray-400 hover:text-white"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>



      <>
          {/* Sub-tabs */}
          <div className="flex space-x-2 justify-center mb-6">
            {tool.examples.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveExample(idx)}
                className={clsx(
                  "px-4 py-1 border rounded",
                  idx === activeExample
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600"
                )}
              >
                Example {idx + 1}
              </button>
            ))}
          </div>

          {/* Comparison Panel */}
          <h3 className="text-xl font-semibold text-center mb-4">
            {example.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            <div className="bg-[#111827] p-4 rounded-lg border border-blue-800">
              <div className="flex justify-between text-blue-400 mb-2 font-semibold">
                <span>Doctor's Dictation</span>
                <span className="text-sm">Audio Input</span>
              </div>
              <h4 className="font-bold mb-2 text-white">{example.beforeTitle}</h4>
              <pre className="whitespace-pre-wrap text-sm text-gray-200">{example.beforePanel}</pre>
            </div>

            <div className="bg-[#1e293b] p-4 rounded-lg border border-yellow-700">
              <div className="flex justify-between text-yellow-400 mb-2 font-semibold">
                <span>{tool.label} Note</span>
                <span className="text-sm">AI-Generated Output</span>
              </div>
              <h4 className="font-bold mb-2 text-white">{example.afterTitle}</h4>
              <pre className="whitespace-pre-wrap text-sm text-gray-200">{example.afterPanel}</pre>
            </div>
          </div>
        </>
    </section>
  );
}
