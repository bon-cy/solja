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
  TouchableOpacity
} from "react-native";
import axios from "axios";

import { useState } from "react";
import App from "../App";
import { useDispatch } from 'react-redux';

export default function Main({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [store, setStore] = React.useState();
  const [name, setName] = React.useState('oops');

  const sov = {
    number: text,
    passvord: number,
  };

  const getPassvord = () => {
    axios
      .get("https://63580267c27556d28934a1f9.mockapi.io/stavks")
      .then((response) => {
        setStore(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  getPassvord()

  const postPassvords = () => {
    axios
      .post("https://63580267c27556d28934a1f9.mockapi.io/stavks", {
        number: text,
        passvord: number,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleReg = () => {
    navigation.navigate("reg");
  };
  const handleVhod = () => {
    

    const fillBass = store.filter((el) => {
      return el.number === text;
    });
   


    if (
      
      fillBass[0]?.passvord === number
    ) {
      alert('Вы вошли')
      navigation.navigate("home");
    } else {
      alert('Не верный логин или пароль')
    }
  };
  const handleTest = () => {
    console.log(store)
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.contText}>Авторизация</Text>
        <SafeAreaView style={styles.imutvind}>
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
            keyboardType="defaultк"
          />
          <TouchableOpacity style={styles.button} onPress={handleVhod}>
            <Text style={styles.butText}>войти</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <TouchableOpacity style={styles.button1} onPress={handleReg}>
        <Text style={styles.butText1}>Нет аккаунта? Зарегистрировался</Text>
      </TouchableOpacity>
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
  contText:{
    color:'#fff',
    fontSize:20,
    marginTop:20
    
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
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 50,
    backgroundColor: "#000",
    paddingBottom: 20,
  },
  logoCont: {
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

export const userName = userName
