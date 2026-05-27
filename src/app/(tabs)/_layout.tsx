import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 120,
          paddingTop: 15,
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "circle";
          switch (route.name) {
            case "index":
              iconName = focused ? "home" : "home-outline";
              break;
            case "search":
              iconName = focused ? "appliance" : "appliance-outline";
              break;
            case "orders":
              iconName = focused ? "document" : "document-outline";
              break;
            case "account":
              iconName = focused ? "person" : "person-outline";
              break;
          }

          return <Ionicons name={iconName as any} size={size} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="power"
        options={{
          title: "Appliance",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="power" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="docs"
        options={{
          title: "Documents",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="document" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
