import React from "react";
import Safras from "../../../public/Safras.jpg";
import Akeela from "../../../public/akeela.jpeg";
import Nimal from "../../../public/nima.jpeg";
import Nuwan from "../../../public/nuwan.jpeg";
import Contributor from "./Contributor";
const Team = () => {
  return (
    <div
      //   style={{ height: "calc(100vh - 70px)" }}
      className="flex flex-col items-center text-center md:justify-evenly p-5"
      id="Team"
    >
      <h3 className="uppercase tracking-[10px] text-[#292929] text-xl my-10 md:text-2xl">
        Our Research Team
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Contributor
          name="Mohamed Safras"
          position="Research Member"
          aboutContributor="Dynamic and results-oriented Software Engineer with a proven track record of delivering high-quality code and leading teams to success. With over 1 year of industry experience in Software Engineering and Web Application Development, I excel in ensuring code artifacts meet the highest quality standards while adhering to set processes and agile practices. My leadership abilities shine through as I motivate team members to follow best practices and maintain productivity using engineering tools and technologies."
          linkedInUrl="https://www.linkedin.com/in/a-w-mohamed-safras"
          image={Safras.src}
          id={1}
        />
        <Contributor
          name="Fathima Akeela"
          position="Research Member"
          aboutContributor="As an aspiring software development engineer, I am currently pursuing my undergraduate studies at the University of Sri Jayewardenepura, within the Faculty of Technology. My academic journey has been marked by a strong foundation in software engineering principles, combined with hands-on experience in developing innovative solutions."
          linkedInUrl="https://www.linkedin.com/in/fathima-akeela-03375527b"
          image={Akeela.src}
          id={2}
        />
        <Contributor
          image={Nuwan.src}
          position="Supervisor"
          aboutContributor="As a dedicated academic and researcher, I am a Senior Lecturer at the University of Sri Jayewardenepura, where I bring over a decade of experience in teaching, research, and industry collaboration. My passion for advancing knowledge and fostering innovation in my field has driven my commitment to excellence in both my academic and professional pursuits."
          name="Nuwan Kuruwitaarachchi, PhD"
          linkedInUrl="https://www.linkedin.com/in/nuwan-kuruwitaarachchi-phd-6b54b828/"
          id={3}
        />
        <Contributor
          position="Co-Supervisor"
          image={Nimal.src}
          aboutContributor="I am a Security Awareness professional, a researcher, and a university academic. I leverage my diverse skills and knowledge to help organisations build a strong cyber resilience culture through engaging and impactful security awareness programs and campaigns.I have over 10 years of consulting experience in IT infrastructure projects, which has given me a strong background in networking and information security."
          name="Nimal Skandhakumar, PhD"
          linkedInUrl="https://www.linkedin.com/in/nimalaprakasan/"
          id={4}
        />
      </div>
    </div>
  );
};

export default Team;
