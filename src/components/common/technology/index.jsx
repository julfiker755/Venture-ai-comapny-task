import React from "react";
import Title from "../../resuable/title";

const technologyData = [
  {
    icon: "🧠",
    title: "Sophisticated Natural Language Processing",
    description:
      "At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.",
  },
  {
    icon: "🔄",
    title: "Learning Mode & Personalization",
    description:
      "Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.",
  },
  {
    title: "Robust Data Privacy & Security",
    tags: [
      {
        icon: "🔒",
        label: "HIPAA COMPLIANT",
        color: "green",
      },
      {
        icon: "📝",
        label: "BUSINESS ASSOCIATE AGREEMENT",
        color: "indigo",
      },
    ],
    description:
      "Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.",
  },
];

const tagColors = {
  green: {
    bg: "bg-[rgba(16,185,129,0.1)]",
    border: "border-[rgba(16,185,129,0.3)]",
    text: "text-[#10b981]",
    hover: "hover:bg-[rgba(16,185,129,0.2)]",
  },
  indigo: {
    bg: "bg-[rgba(79,70,229,0.1)]",
    border: "border-[rgba(79,70,229,0.3)]",
    text: "text-[#818cf8]",
    hover: "hover:bg-[rgba(79,70,229,0.2)]",
  },
};

export default function Technologies() {
  return (
    <section
      id="technology"
      className="section-main bg-[#0f172a]"
    >
      <Title
        title={"Our Technology"}
        textStyle={"max-w-5xl"}
        text="At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in natural language processing and machine
          learning to create a system that truly understands the complexities of
          medical documentation"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto mt-[50px]">
        {technologyData.map((item, index) => (
          <div
            key={index}
            className="bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl"
          >
            {/* Icon or Tags */}
            {item.icon && (
              <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
                <div className="text-[30px] text-[#60a5fa]">{item.icon}</div>
              </div>
            )}

            {item.tags && (
              <div className="flex gap-[15px] flex-wrap">
                {item.tags.map((tag, tagIdx) => {
                  const color = tagColors[tag.color];
                  return (
                    <div
                      key={tagIdx}
                      className={`inline-flex items-center py-[6px] px-[15px] rounded-[25px] mb-5 border ${color.bg} ${color.border} transition-all duration-300 ${color.hover}`}
                    >
                      <span className={`mr-[10px] text-[18px] ${color.text}`}>
                        {tag.icon}
                      </span>
                      <span className="text-white font-semibold text-[0.833rem] tracking-[0.05em]">
                        {tag.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Title & Description */}
            <h3 className="text-[1.728rem] font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
              {item.title}
            </h3>
            <p className="text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
