import Image from "next/image";
import React from "react";
import FastAPI from "../../../public/fastapi.svg";
import HuggingFace from "../../../public/huggingFace.png";
import NextJsLogo from "../../../public/next.svg";
import NodeJs from "../../../public/nodejs.png";
import PythonLogo from "../../../public/Python.png";
import ReactLogo from "../../../public/react.js-img.png";
import TS from "../../../public/typescript.png";
import YOLOV8 from "../../../public/YOLOv8_YouTube_Thumbnail.png";
import Tools from "./tools";
const ToolsAndTech = () => {
  return (
    <div
      // style={{ height: "calc(100vh - 70px)" }}
      className="flex flex-col items-center h-full text-centers  md:justify-evenly p-5"
      id="ToolsAndTech"
    >
      <h3 className="uppercase tracking-[10px] text-[#292929] text-xl my-10 md:text-2xl">
        Tools & Technologies
      </h3>
      <p className="text-gray-500 text-base mb-5">
        In our research, we employed a range of advanced technologies to develop
        an efficient and scalable solution for mango waste reduction and dynamic
        pricing optimization. The mobile application was built using React
        Native, providing a seamless and intuitive user interface for uploading
        mango images. For the backend, we utilized FastAPI to create a robust
        and high-performance API, while Uvicorn served as the ASGI server to
        handle asynchronous processing. The machine learning model was hosted on
        Hugging Face, enabling easy deployment and management. We trained a
        YOLOv8 model on a dataset of over 30,000 mango images, applying various
        data preprocessing techniques such as resizing, normalization, rotation,
        scaling, and brightness adjustment to enhance model accuracy and
        robustness. This comprehensive approach ensured reliable image
        processing, secure data storage, and accurate ripeness prediction,
        paving the way for effective dynamic pricing strategies.
      </p>
      <div className="grid grid-cols-3 gap-6  md:grid-cols-4 lg:grid-cols-8">
        <Tools src={NextJsLogo} />
        <Tools src={PythonLogo.src} />
        <Tools src={TS.src} />
        <Tools src={YOLOV8.src} />
        <Tools src={FastAPI} />
        <Tools src={NodeJs.src} />
        <Tools src={ReactLogo.src} />
        <Tools src={HuggingFace.src} />
      </div>
    </div>
  );
};

export default ToolsAndTech;
