import { COLORS } from "@/constants/colors";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Banner() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={width - 40}
        snapToAlignment="start"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.card}>
          <Text style={styles.title}>
            Ever Felt Cheated On Your Power Consumption?
          </Text>
          <Text style={styles.description}>
            Just add all the appliances you use and discover the consumption
            rate and charge(cost) on hourly, daily, weekly and monthly basis.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Listen To Your Documents</Text>
          <Text style={styles.description}>
            Why not connect your headset and just listen to that long document
            whether you are at the office, in the bus or home.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 15,
    overflow: "hidden",
  },
  scrollContent: {
    alignItems: "center",
  },
  card: {
    width: width - 40,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 22,
  },
});
