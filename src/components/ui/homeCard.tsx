import { COLORS } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

const cards = [
  {
    id: 1,
    title: "Appliance",
    description: "Add electrical appliance or gadget.",
  },
  {
    id: 2,
    title: "Insight",
    description: "Get insight into your energy consumption.",
  },
  {
    id: 3,
    title: "Listen",
    description: "Listen to the content of your documents than reading it.",
  },
  {
    id: 4,
    title: "Report",
    description: "Needing a help or you have seen an issue?",
  },
];

export default function HomeCards() {
  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <View key={card.id} style={styles.card}>
          <Text style={styles.cardText}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },

  card: {
    width: "48%",
    height: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    padding: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },

  cardText: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: COLORS.textGray,
    textAlign: "center",
  },
});
