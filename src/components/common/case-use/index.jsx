import React from "react";
import Title from "../../resuable/title";

const caseStudies = [
  {
    title: "Primary Care",
    quote:
      "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity.",
    author: "— Dr. SJ, MD",
    description:
      "Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.",
  },
  {
    title: "Emergency Medicine",
    description:
      "Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.",
    author: "— Emergency Department (ED) Nurse Manager",
  },
  {
    title: "Behavioral Health",
    quote:
      `Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; 
       We've slashed average charting time to <strong>under 3 minutes per patient</strong>, freeing up hours for direct care. 
       More importantly, we've seen a significant <strong>reduction in documentation errors and compliance flags</strong>. 
       It's not just faster; it's <em>smarter</em> documentation.`,
    author: "— Clinical Director, Behavioral Health Practice",
  },
  {
    title: "Case Management",
    quote:
      `Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. 
       But this AI feels like getting an assistant. It takes my detailed notes and <strong>instantly</strong> 
       creates the clear, customized charts I need. I'm getting hours back each week – hours I can now spend 
       directly with patients, tackling barriers, not just typing.`,
    author: "— Social Worker/Case Manager",
  },
];

export default function CaseUse() {
  return (
    <section id="case-use" className="section-main bg-[#0f172a]">
        <Title title={"Case Use"} text="See how healthcare providers across specialties are transforming their practice with Clin Technologies"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto mt-8">
        {caseStudies.map((item, idx) => (
          <div
            key={idx}
            className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl"
          >
            <h3 className="text-[1.44rem] font-semibold text-[#60a5fa] mb-4">{item.title}</h3>
            {item.description && <p className="text-white/90">{item.description}</p>}
            {item.quote && (
              <p
                className="italic text-white mb-2 mt-6 pl-4 border-l-[3px] border-[rgba(96,165,250,0.3)]"
                dangerouslySetInnerHTML={{ __html: item.quote }}
              />
            )}
            <p className="italic text-right text-[#94a3b8] mt-2.5 text-[0.833rem] font-medium">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
