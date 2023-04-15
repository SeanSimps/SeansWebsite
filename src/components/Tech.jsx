import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-2/3">
        <div className="container mx-auto py-10">
          <div className="w-full max-w-screen-lg">
            {technologies.map((technology) => (
              <div
                className="flex flex-row flex-wrap items-center py-2"
                key={technology.name}
              >
                <div className="w-full md:w-1/3 flex justify-center items-center mb-4">
                  <BallCanvas icon={technology.icon} />
                </div>
                <div className="w-full md:w-2/3 pl-4">
                  <h4 className="font-bold text-white-100 text-lg">
                    {technology.name}
                  </h4>
                  <p className="text-white-100">{technology.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-secondary h-screen" />
    </div>
  );
};

export default SectionWrapper(Tech, "");
