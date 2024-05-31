"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import DataCollection from "../../../public/data collection (1).png";
import Daigram from "../../../public/research architectute.drawio.png";
const Methodology = () => {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">
        Solution Architecture Our solution architecture ensures efficient
        processing and accurate ripeness prediction of mangoes, enabling dynamic
        pricing to reduce waste. The mobile application, developed using React
        Native, allows users to easily upload mango images. These images are
        processed by a backend server built with FastAPI and Uvicorn, ensuring
        fast and reliable performance. Our YOLOv8 machine learning model, hosted
        on Hugging Face, is trained on a dataset of over 30,000 mango images.
        The data preprocessing pipeline includes techniques such as resizing,
        normalization, rotation, and scaling to prepare the images for accurate
        prediction. The model then predicts the ripeness of the mangoes,
        allowing for dynamic pricing adjustments to optimize sales and reduce
        waste. All images and prediction results are securely stored in the
        cloud, ensuring data privacy and scalability. This architecture
        integrates mobile app development, advanced AI, and secure cloud storage
        to create an effective solution for reducing mango waste and enhancing
        the efficiency of the agricultural supply chain.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-5">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={Daigram.src}
            alt="mango"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            className="rounded-md"
          />
          <p className="text-gray-500 text-sm">
            <i>solution architecture daigram</i>
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={DataCollection.src}
            alt="mango"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            className="rounded-md"
          />
          <p className="text-gray-500 text-sm">
            <i>data collection</i>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Methodology;
