import React from "react";
import Main from "./components/main";
import Registr from "./components/registr";
import Home from "./components/home";
import Dab from "./components/darb";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{ title: "главная" }}
        />
         <Stack.Screen
          name="reg"
          component={Registr}
          options={{ title: "регистрация" }}
        />
        <Stack.Screen name="home" component={Home} options={{ title: "дом" }} />
        <Stack.Screen name="Med" component={Dab} options={{ title: "мед" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
