import { COLORS } from "@/constants/colors";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity>
        <Text>Need Help?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
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
