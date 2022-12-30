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
} from "react-native";
import axios from "axios";

import { useState } from "react";

export default function Main({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [store, setStore] = React.useState();


  

  const getPassvord = () => {
    axios.get("https://63580267c27556d28934a1f9.mockapi.io/stavks").then(response => {
      setStore(response.data)
      
    }).catch(error => {console.error(error)})
  };

  const postPassvords = () => {
    axios.post("https://63580267c27556d28934a1f9.mockapi.io/stavks",{
      number: "800000000",
      passvord: "000000000",
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  const sov = {
    number: text,
    passvord: number,
  };

  const handlePush = () => {
    // navigation.navigate("home");
    getPassvord()
  };

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.reg}>Войдите в учетную запись</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Нрмер телефона"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Пароль"
            keyboardType="numeric"
          />
          <Button
            style={styles.botton}
            title="Войти"
            color="#000"
            onPress={postPassvords}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",

    alignItems: "center",
    flexDirection: "column",
  },
  cont: {
    marginTop: 50,
    backgroundColor: "#fff",
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

    borderRadius: 10,
  },
  botton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "red",
  },
});
