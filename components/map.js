import React from "react";
import { WebView } from "react-native-webview";
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
  ImageBackground,
} from "react-native";
import axios from "axios";

import { useState } from "react";

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.citiCont}></View>
      <TouchableOpacity style={styles.butt1}>
        <ImageBackground
          style={styles.bacimaga1}
          resizeMode="cover"
          source={require("/Users/macbookair/Desktop/soljaa/assets/moll.png")}
        ></ImageBackground>
      </TouchableOpacity>

      <View style={styles.cartsCont}>
        <TouchableOpacity style={styles.butt}>
          <ImageBackground
            style={styles.bacimaga}
            resizeMode="cover"
            source={require("/Users/macbookair/Desktop/soljaa/assets/mycytyy.png")}
          >
            <Text style={styles.textt}>Мероприятия</Text>
            <Text style={styles.textt1}>События в Грозном</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.butt}>
          <ImageBackground
            style={styles.bacimaga}
            resizeMode="cover"
            source={require("/Users/macbookair/Desktop/soljaa/assets/mycytyy.png")}
          >
            <Text style={styles.textt}>Сделано в Грозном</Text>
            <Text style={styles.textt1}>Развивающиеся местные бренды</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  butt: {
    marginTop: 10,
    width: 250,
    height: 80,
    marginLeft: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  butt1: {
    marginTop: 10,
    width: 300,
    height: 110,
    marginLeft: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  bacimaga: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  bacimaga1: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  textt: {
    marginLeft:10
  },
  textt1: {
    marginLeft:10
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
});
