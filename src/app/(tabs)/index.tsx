import Header from "@/components/ui/header";
import HomeCards from "@/components/ui/homeCard";
import { StyleSheet } from "react-native";
const HomeScreen = () => {
  return (
    <>
      <Header name="Home" />
      <HomeCards />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
