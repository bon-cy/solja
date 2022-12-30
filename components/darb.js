import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  ButtonGroup,
  withTheme,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

import { useState } from "react";

export default function Dab({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Нрмер телефона"
          keyboardType="numeric"
        />

        <View style={styles.contentView}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/1.png")}
              >
                <Text style={styles.text1}>Берс</Text>
                <Text style={styles.text2}>
                  Медицинская клиника ул. Д.Б. Абдурахманова, 43А
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/2.png")}
              >
                <Text style={styles.text1}>АйМед</Text>
                <Text style={styles.text2}>
                  Медицинская клиника ул. Профессора Сухарева, 26
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/1.png")}
              >
                <Text style={styles.text1}>МедИм</Text>
                <Text style={styles.text2}>
                  Медицинская клиника ул. Дьякова, 25А, Грозный
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/2.png")}
              >
                <Text style={styles.text1}>Гранд-Мед</Text>
                <Text style={styles.text2}>
                  Семейная клиника ул.С.Ш.Лорсанова 25
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/1.png")}
              >
                <Text style={styles.text1}>БиоМед</Text>
                <Text style={styles.text2}>
                  Медицинская клиника ул. Дьякова, 25А, Грозный
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/2.png")}
              >
                <Text style={styles.text1}>Ситимед</Text>
                <Text style={styles.text2}>
                  Медицинская клиника проспект. Кадырова, 31
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/1.png")}
              >
                <Text style={styles.text1}>Ваймед</Text>
                <Text style={styles.text2}>
                  Медицинский центр проспект. Кадырова, 234
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/2.png")}
              >
                <Text style={styles.text1}>Ummi med</Text>
                <Text style={styles.text2}>
                  Медицинская клиника ул.Мира, 54
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/1.png")}
              >
                <Text style={styles.text1}>Медик-Профи</Text>
                <Text style={styles.text2}>
                  Медицинская клиника просп. В.В. Путина, 17А
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/2.png")}
              >
                <Text style={styles.text1}>Альфа-Мед</Text>
                <Text style={styles.text2}>
                  Лечебно-диагностический Центр ул.Лисицина 34
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/1.png")}
              >
                <Text style={styles.text1}>МД Клиник</Text>
                <Text style={styles.text2}>
                  Клиника эстетической медицины ул.Гикало, 1
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <ImageBackground
                style={styles.phon}
                resizeMode="cover"
                source={require("/Users/macbookair/Desktop/soljaa/assets/2.png")}
              >
                <Text style={styles.text1}>Эрта</Text>
                <Text style={styles.text2}>Медицинский центр

ул.Мира,54</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 25,
    color: "#fff",
    marginLeft: 15,
    marginBottom: 10,
    marginTop: -15,
  },
  text2: {
    fontSize: 10,
    color: "#fff",
    marginLeft: 15,
  },
  btn: {
    
    width: 175,
    height: 110,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom:15
  },
  buttonsContainer: {
    flex: 1,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  phon: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  contentView: {
    flex: 1,
  },
  input: {
    width: "80%",
    height: 25,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: "50%",
    marginBottom:25
  },
});
