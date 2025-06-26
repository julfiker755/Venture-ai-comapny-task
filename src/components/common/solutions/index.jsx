import React from "react";
import Title from "../../resuable/title";

const solutions = [
  {
    title: "Validify",
    icon: "✓",
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.1)",
    borderTop: "#10b981",
    description:
      "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.",
  },
  {
    title: "Redactify",
    icon: "⊘",
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    borderTop: "#f59e0b",
    description:
      "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
  },
  {
    title: "TranscriptX",
    icon: "🗣️",
    iconColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.1)",
    borderTop: "#3b82f6",
    description:
      "Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.",
  },
  {
    title: "Chartwright",
    icon: "📝",
    iconColor: "#ec4899",
    iconBg: "rgba(236,72,153,0.1)",
    borderTop: "#ec4899",
    description:
      "Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.",
  },
];

export default function Solutions() {
  return (
    <section
      id="features"
      className="section-main  bg-[#0f172a]"
    >
      <Title
        title={" Our Solutions"}
        text="Our comprehensive suite of AI-powered solutions transforms every
          aspect of healthcare documentation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-10 max-w-[1200px] w-full mx-auto">
        {solutions.map(
          ({ title, icon, iconColor, iconBg, borderTop, description }) => (
            <div
              key={title}
              className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl"
              style={{ borderTop: `3px solid ${borderTop}` }}
            >
              <div
                className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full mb-5 transition-all duration-300 text-[32px] hover:scale-110"
                style={{ color: iconColor, backgroundColor: iconBg }}
              >
                {icon}
              </div>
              <h3 className="text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4">
                {title}
              </h3>
              <p className="text-white">{description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
