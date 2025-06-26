import React from "react";
import Title from "../../resuable/title";
import Button from "../../resuable/button";

export default function GetStarted() {
  return (
    <section id="contact" className="section-main bg-[#1e293b]">
      <Title
        title={"Get Started"}
        text=" Ready to transform your clinical documentation process? Contact our
          team to learn how Clin Technologies can be tailored to your specific
          healthcare setting"
        textStyle={"max-w-3xl"}
      />
      <div className="max-w-[600px] mt-10 mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg border border-[rgba(96,165,250,0.2)]">
        <div className="mt-8 text-center">
          <p className="text-[#94a3b8]">
            Or reach us directly via email at{" "}
            <a
              href="mailto:support@clintechso.com"
              className="text-[#60a5fa] hover:underline"
            >
              support@clintechso.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-8 flex-col md:flex-row">
        <Button outline={false} className={"py-3 px-8"}>
          Login
        </Button>
        <Button className={"py-3 px-8"}> Signup</Button>
      </div>
    </section>
  );
}
