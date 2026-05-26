import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      style={[
        styles.container,
        { paddingLeft: insets.left, paddingRight: insets.right },
      ]}
    >
      <Onboarding
        bottomBarHeight={90 + insets.bottom}
        onSkip={() => router.push("/(tabs)")}
        onDone={() => router.push("/(tabs)")}
        pages={[
          {
            backgroundColor: "#336DF6",
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
            backgroundColor: "#336DF6",
            image: (
              <Image
                source={require("../../../assets/images/document.png")}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            ),
            title: "Read Documents By Listening",
            subtitle:
              "Listen to your documents instead of reading them on the go.",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OnboardingScreen;
