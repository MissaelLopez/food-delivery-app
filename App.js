import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store"

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
