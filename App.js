import React, { useState, useEffect } from "react";
import { View, SafeAreaView } from "react-native";

import Posts from "./Components/Back.js";
import Modals from "./Components/Modal.js";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Posts></Posts>
        <Modals></Modals>
      </View>
    </SafeAreaView>
  );
}
