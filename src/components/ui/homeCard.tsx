import { StyleSheet, View } from "react-native";

const HomeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeCard;
