import React from "react";
import Title from "../../resuable/title";
import Button from "../../resuable/button";

const benefits = [
  "Reduction in documentation time by 40-60%",
  "Improved work-life balance with less after-hours charting",
  "Enhanced patient interaction due to less focus on note-taking",
  "More comprehensive and consistent clinical documentation",
  "Reduced risk of documentation errors and omissions",
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-main bg-[#1e293b]">
       <Title title={"Benefits"}/>
      <div className="max-w-[1000px] mx-auto text-white mt-8">
        <p className="mb-4">
          Healthcare providers using Clin Technologies solutions report:
        </p>
        <ul className="mb-8 pl-8 list-disc">
          {benefits.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        <div className="flex justify-center gap-5 mt-8 flex-col md:flex-row">
            <Button outline={false} className={"py-3 px-8"}>Login</Button>
            <Button className={"py-3 px-8"}> Signup</Button>
        </div>
      </div>
    </section>
  );
}
