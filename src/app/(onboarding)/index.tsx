import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
      <Onboarding
        bottomBarHeight={90 + insets.bottom}
        onSkip={() => console.log("Skipped")}
        onDone={() => console.log("Done")}
        pages={[
          {
            backgroundColor: "#a6e4d0",
            image: (
              <Image
                source={require("../../../assets/images/bulb.png")}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            ),
            title: "Know Your Energy Consumption",
            subtitle:
              "An easy and seamless way to know the energy consumption of your appliances",
          },
          {
            backgroundColor: "#fdeb93",
            image: (
              <Image
                source={require("../../../assets/images/document.png")}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            ),
            title: "Read Documents By Listening",
            subtitle:
              "Listen to your documents instead of reading them on the go",
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
