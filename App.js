import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import style from "./src/lib/Style/Style";

export default function App() {
  return (
    <View style={style.launch}>
      <Image
        style={style.logo}
        source={require("./src/lib/icons/school_logo.png")}
      />
    </View>
  );
}
