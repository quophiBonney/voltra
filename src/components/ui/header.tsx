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
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.help}>Need Help?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    overflow: "hidden",
  },
  contentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
  },
  help: {
    backgroundColor: "#fff",
    color: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
    fontWeight: 900,
  },
});
