import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
  useWindowDimensions,
} from "react-native";
import HomeScreen from "../(tabs)";
type Slide = {
  id: string;
  title: string;
  description: string;
  image: any;
};

const slides: Slide[] = [
  {
    id: "1",
    title: "Welcome to Voltra",
    description:
      "Track your electricity usage in a simple way and understand how your applicances consume the energy.",
    image: require("../../../assets/images/bulb.png"),
  },
  {
    id: "2",
    title: "Scan & Add Appliance",
    description:
      "Add appliances easily and get a better estimate of your energy consumption on daily, weekly and monthly basis.",
    image: require("../../../assets/images/scan.png"),
  },
  {
    id: "3",
    title: "Listen Than Read",
    description:
      "Worry not about reading long text in your document, this time you listen on the go.",
    image: require("../../../assets/images/reading.png"),
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const flatListRef = useRef<FlatList<Slide>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setCurrentIndex(viewableItems[0].index);
      }
    },
  ).current;

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      setFinished(true);
    }
  };

  const goSkip = () => {
    setFinished(true);
  };

  if (finished) {
    return <HomeScreen />;
  }

  const renderItem = ({ item, index }: { item: Slide; index: number }) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.4, 1, 0.4],
      extrapolate: "clamp",
    });

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [30, 0, 30],
      extrapolate: "clamp",
    });

    return (
      <View style={[styles.slide, { width }]}>
        <Animated.View
          style={[
            styles.card,
            {
              opacity,
              transform: [{ scale }, { translateY }],
            },
          ]}
        >
          <View>
            <Image
              source={item.image}
              resizeMode="contain"
              style={styles.image}
            />
          </View>

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={goSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      <View style={styles.bottomSection}>
        <View style={styles.dotsRow}>
          {slides.map((_, index) => {
            const dotWidth = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [8, 24, 8],
              extrapolate: "clamp",
            });

            const dotOpacity = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [0.4, 1, 0.4],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  {
                    width: dotWidth,
                    opacity: dotOpacity,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={goNext}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? (
            <MaterialIcons name="done" style={styles.icon} />
          ) : (
            <MaterialIcons name="keyboard-arrow-right" style={styles.icon} />
          )}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  topRow: {
    alignItems: "flex-end",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  skipText: {
    fontSize: 16,
    color: "#667085",
    fontWeight: "600",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: SCREEN_WIDTH * 0.82,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#101828",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#667085",
    textAlign: "center",
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 120,
    gap: 18,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "#2E5BFF",
  },
  button: {
    position: "relative",
    bottom: 20,
    width: 50,
    left: 250,
    right: 0,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#2E5BFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  icon: {
    fontSize: 40,
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F7F9FC",
  },
  homeTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#101828",
    marginBottom: 12,
  },
  homeText: {
    fontSize: 16,
    color: "#667085",
    textAlign: "center",
    lineHeight: 24,
  },
});
