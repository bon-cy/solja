import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableHighlight,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import { useState } from "react";

export default function Registr({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [store, setStore] = React.useState();

  const postPassvords = () => {
    axios
      .post("https://63580267c27556d28934a1f9.mockapi.io/stavks", {
        number: text1,
        passvord: number,
        name:text
      })
      .then((response) => {
        alert("Успешная регистрация");
        navigation.navigate("home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePush = () => {
    if (text !== null) postPassvords();
  };
  const handleReg = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.contText}>Регистрация</Text>
        <SafeAreaView style={styles.imutvind}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Имя"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
            placeholder="Нрмер телефона"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Пароль"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handlePush}>
            <Text style={styles.butText}>Войти</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      <View style={styles.logoCont}>
        <Image
          style={styles.img}
          source={require("/Users/macbookair/Desktop/soljaa/assets/soljapng.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
  },
  imutvind: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 140,
    borderWidth: 1,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 140,
  },
  butText: {
    fontSize: 20,
    marginTop: -3,
  },
  butText1: {
    textAlign: "center",
    color: "blue",
  },
  container: {
    flex: 1,
    display: "flex",

    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  cont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 20,
    marginTop: 50,
    backgroundColor: "#041",
    paddingBottom: 20,
  },
  logoCont: {
    marginTop: 48,
    width: 355,
    height: 700,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  img: {
    width: "20%",
    height: "5%",
  },
  reg: {
    marginLeft: 17,
    marginBottom: 10,
  },
  input: {
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#666",
  },
});
