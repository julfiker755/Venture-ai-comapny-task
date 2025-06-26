import React from "react";
import Logo from "../logo";
import Button from "../../resuable/button";
import { Link } from "react-router-dom";

export default function HeroSec() {
  return (
    <div className="relative left-0 w-full h-[calc(100vh-60px)] bg-[#0a1022] z-10 overflow-hidden shadow-2xl">
      <canvas
        id="particles-canvas"
        className="absolute top-0 left-0 w-full h-full"
        width="1425"
        height="405"
      ></canvas>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(10,16,34,0)_0%,rgba(10,16,34,0.8)_80%,rgba(10,16,34,1)_100%)] z-2"></div>

      {/* Floating Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-3">
        <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 animate-float"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 animate-float delay-[2s]"></div>
        <div className="absolute top-[20%] right-[15%] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 animate-float delay-[1s]"></div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(59,130,246,0)_70%)] pointer-events-none z-2 opacity-0 transition-opacity duration-300 blur-xl"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-2  text-center z-11 w-[90%] max-w-[1200px]">
        <div className="mb-[3px] animate-fadeInUp delay-[200ms]">
          <div className="hidden md:block md:w-[90px] h-[80px] mx-auto mb-[5px] relative">
           <Logo/>
          </div>
        </div>

        <h1 className="text-xl md:text-[2.986rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] m-0 tracking-tight animate-fadeInUp delay-[500ms]">
          Clin Technologies
        </h1>
        <p className="text-xl md:text-[1.728rem] font-normal text-[#94a3b8] mt-[5px] mb-0 tracking-normal animate-fadeInUp delay-[800ms]">
          Revolutionizing clinical documentation through{" "}
          <span className="text-[#f59e0b] font-semibold">HIPAA COMPLIANT</span>{" "}
          advanced artificial intelligence, giving healthcare providers more
          time for what truly matters — patient care. try it for{" "}
          <span className="text-[#f59e0b] font-semibold">FREE</span> today
        </p>
        <p className="text-xl md:text-[1.728rem] text-[#e2e8f0] max-w-[700px] mx-auto mt-[20px] leading-normal animate-fadeInUp delay-[1100ms]">
          Our sophisticated AI platform intelligently processes clinical
          conversations, creating accurate documentation that integrates with
          your existing EMR system.
        </p>

        <div className="mt-[40px] flex justify-center gap-2 md:gap-10 md:flex-row flex-col animate-fadeInUp delay-[1400ms]">
           <Link to={"/login"}><Button outline={false}> Login</Button></Link>
           <Link to="/sign-up"><Button>Signup</Button></Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute hidden  bottom-[30px] left-1/2 transform -translate-x-1/2 md:flex flex-col items-center animate-fadeIn delay-[2000ms]">
        <div className="w-[24px] h-[38px] border-2 border-[rgba(148,163,184,0.5)] rounded-[12px] relative mr-2">
          <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-[#60a5fa] rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </div>
  );
}
