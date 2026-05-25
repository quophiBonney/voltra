import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen: React.FC = () => {
  const pages = [
    {
      backgroundColor: "#a6e4d0",
      image: React.createElement(Image, {
        source: require("../../../assets/images/bulb.png"),
        style: { width: 200, height: 200 },
      }),
      title: "Know Your Energy Consumption",
      subtitle:
        "An easy and seamless way to know the energy consumption of your appliances",
    },
    {
      backgroundColor: "#fdeb93",
      image: React.createElement(Image, {
        source: require("../../../assets/images/document.png"),
        style: { width: 200, height: 200 },
      }),
      title: "Read Documents By Listening",
      subtitle: "Listen to your documents instead Of reading them On the goal",
    },
  ];

  return React.createElement(Onboarding, { pages });
};

export default OnboardingScreen;
