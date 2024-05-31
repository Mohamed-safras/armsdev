"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import App2 from "../../../public/17_Dark_sign up, step 12.png";
import App4 from "../../../public/appsplashscreen.jpg";
import Mission from "../../../public/bullseye-solid.svg";
import Vision from "../../../public/eye-solid.svg";
import Goal from "../../../public/medal-solid.svg";
import App3 from "../../../public/Plant Care App (Dribbble shot) (1).jpg";
import App1 from "../../../public/Plant Care App (Dribbble shot).jpg";
import App5 from "../../../public/ripenessprediction_output_screen.jpg";
import Card from "./Card";
import Methodology from "./Methodology";
const Header = () => {
  return (
    <div
      className="flex flex-col items-center text-center md:justify-evenly p-5"
      id="Home"
    >
      <h3 className="uppercase tracking-[10px] text-[#292929] text-xl my-10 md:text-2xl">
        RipeSmart
      </h3>
      <div className="mb-5">
        <h1 className="uppercase  text-[#292929] text-sm mb-2 md:text-base">
          REDUCING MANGO WASTE: A DYNAMIC PRICING SOLUTION FOR SUSTAINABLE
          SUPPLY CHAINS
        </h1>
        <p className="text-gray-500 text-sm">
          Welcome to our project dedicated to reducing mango waste and
          optimizing pricing strategies through the power of artificial
          intelligence. We have developed an innovative mobile application that
          accurately predicts the ripeness of mangoes, enabling dynamic pricing
          to minimize waste and maximize value. Our solution is designed to
          benefit farmers, retailers, and consumers by enhancing the efficiency
          and sustainability of the agricultural supply chain. Join us in
          revolutionizing the way we manage agricultural produce, creating a
          more sustainable future for everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 p-5 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex bg-[#292929] items-center justify-center shadow-lg p-5 rounded-lg w-[200px]"
        >
          <Image src={App4.src} alt="app1" width={100} height={100} />
        </motion.div>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex bg-[#292929] items-center justify-center shadow-lg p-5 rounded-lg w-[200px]"
        >
          <Image src={App3.src} alt="app1" width={100} height={100} />
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center bg-[#292929] shadow-lg p-5 rounded-lg w-[200px]"
        >
          <Image src={App2.src} alt="app1" width={100} height={100} />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center shadow-lg p-5 bg-[#292929] rounded-lg w-[200px]"
        >
          <Image src={App1.src} alt="app1" width={100} height={100} />
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex bg-[#292929] items-center justify-center shadow-lg p-5 rounded-lg w-[200px]"
        >
          <Image src={App5.src} alt="app1" width={100} height={100} />
        </motion.div>
      </div>
      <div className="my-5">
        <h3 className="uppercase tracking-[5px] text-[#292929] text-sm  md:text-lg">
          Methodology
        </h3>
        <Methodology />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          src={Vision}
          title="Vision"
          describtion="To revolutionize the agricultural industry by integrating cutting-edge AI technologies, reducing food waste, and creating sustainable and efficient supply chains that benefit farmers, retailers, and consumers globally."
        />
        <Card
          src={Mission}
          title="Mission"
          describtion="To develop an innovative mobile application that leverages artificial intelligence to accurately predict the ripeness of mangoes, optimize dynamic pricing strategies, and minimize food waste. We aim to empower stakeholders in the agricultural supply chain with advanced tools and insights to make informed decisions and enhance overall productivity and sustainability."
        />
        <Card
          src={Goal}
          title="End Goal"
          describtion="To successfully implement a scalable and user-friendly mobile application that significantly reduces mango waste and optimizes pricing, setting a precedent for similar AI-driven solutions in the agricultural sector. Our ultimate aim is to create a more sustainable and efficient agricultural ecosystem, benefiting all participants in the supply chain and contributing to global food security."
        />
      </div>
    </div>
  );
};

export default Header;
