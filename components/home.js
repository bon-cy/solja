import React from "react";
import { useDispatch } from "react-redux";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TouchableHighlightBase,
  ScrollView,
  ImageBackground,
} from "react-native";
import axios from "axios";

export default function Home({ navigation }) {
  const [store, setStore] = React.useState();


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
  getPassvord();

  const handleDarb = () => {
    navigation.navigate("Med");
  };

  const handleMAP = () => {
    navigation.navigate("map");
  };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.phon}
        resizeMode="cover"
        source={require("/Users/macbookair/Desktop/soljaa/assets/fon.jpg")}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.ava}>
            <View style={styles.imgVind}>
              <Image
                style={styles.img}
                source={require("/Users/macbookair/Desktop/soljaa/assets/1000_F_238869163_e3qB2KaDKBQZXWbCHixq7PQ9xTYRgTCA.jpg")}
              />
            </View>

            <Text style={styles.avaText}>islam</Text>
          </TouchableOpacity>

          <View style={styles.newsimgCont}>
            <ImageBackground
              style={styles.newsimg}
              resizeMode="cover"
              source={require("/Users/macbookair/Desktop/soljaa/assets/news.png")}
            >
              <View style={styles.sloy}>
                <Image
                  style={styles.sloyimg}
                  source={require("/Users/macbookair/Desktop/soljaa/assets/newsrec.jpg")}
                />
                <View style={styles.textSloy}>
                  <Text style={styles.sloytext}>
                    Что посмотреть на выходных?
                  </Text>
                  <Text style={styles.sloytext1}>
                    Новоголняя афиша в кинотеатре Грозный
                  </Text>
                </View>
              </View>

              <View style={styles.textSloy2}>
                <Text style={styles.sloytext2}>Грозный сегодня</Text>
                <Text style={styles.sloytext3}>
                  Чеченская Республика перевыполнила показатель объемов
                  жилищного строительства в 2.5 раза
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.cont}>
            <SafeAreaView>
              <TouchableOpacity style={styles.butt} onPress={handleMAP}>
                <ImageBackground
                  style={styles.bacimaga}
                  resizeMode="cover"
                  source={require("/Users/macbookair/Desktop/soljaa/assets/obsh.png")}
                >
                  <Text style={styles.textt}>Маршруты</Text>
                  <Text style={styles.textt1}>Карта транспорта</Text>
                  <Text style={styles.textt1}>Рассписание маршрутов</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={styles.butt}>
                <ImageBackground
                  style={styles.bacimaga}
                  resizeMode="cover"
                  source={require("/Users/macbookair/Desktop/soljaa/assets/car.png")}
                >
                  <Text style={styles.textt}>Мое авто</Text>
                  <Text style={styles.textt1}>Оплата штрафов </Text>
                  <Text style={styles.textt1}>Оформление ДТП</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={styles.butt} onPress={handleMAP}>
                <ImageBackground
                  style={styles.bacimaga}
                  resizeMode="cover"
                  source={require("/Users/macbookair/Desktop/soljaa/assets/citi.png")}
                >
                  <Text style={styles.textt}>Мой город</Text>
                  <Text style={styles.textt1}>Мероприятия </Text>
                  <Text style={styles.textt1}>Сделано в грозном </Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={styles.butt}>
                <ImageBackground
                  style={styles.bacimaga}
                  resizeMode="cover"
                  source={require("/Users/macbookair/Desktop/soljaa/assets/hous.png")}
                >
                  <Text style={styles.textt}>Мой дом</Text>
                  <Text style={styles.textt1}>Оплата ЖКХ </Text>
                  <Text style={styles.textt1}>Вызов мастера </Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={styles.butt}>
                <ImageBackground
                  style={styles.bacimaga}
                  resizeMode="cover"
                  source={require("/Users/macbookair/Desktop/soljaa/assets/citi.png")}
                >
                  <Text style={styles.textt}>Моя школа</Text>
                  <Text style={styles.textt1}>Результаты ЕГЭ и ОГЭ</Text>
                  <Text style={styles.textt1}>Дневник</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={styles.butt} onPress={handleDarb}>
                <ImageBackground
                  style={styles.bacimaga}
                  resizeMode="cover"
                  source={require("/Users/macbookair/Desktop/soljaa/assets/med.png")}
                >
                  <Text style={styles.textt}>Здоровье</Text>
                  <Text style={styles.textt1}>Запись к врачу</Text>
                  <Text style={styles.textt1}>Выбор клиники</Text>
                </ImageBackground>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textSloy2: {
    width: 325,
    height: 50,
    marginTop: 15,
    marginLeft: 10,
  },
  sloytext2: {
    marginTop: -6,
    marginLeft: 8,
    fontSize: 18,
  },
  sloytext3: {
    marginLeft: 8,
    fontSize: 12,
  },
  sloytext: {
    fontSize: 15,
    color: "#fff",
  },
  sloytext1: {
    fontSize: 12,
    marginTop: 4,
    color: "#fff",
  },
  sloy: {
    display: "flex",
    flexDirection: "row",
    marginTop: 0,
  },
  sloyimg: {
    width: 130,
    height: 74,
    borderRadius: 15,
    marginLeft: 6,
  },
  textSloy: {
    width: 150,
    marginLeft: 20,
  },
  newsimgCont: {
    marginTop: 30,
    width: 345,
    height: 155,
    marginLeft: 15,
    borderRadius: 20,
    // borderWidth: 1,
    overflow: "hidden",
  },
  newsimg: {
    height: "100.5%",
    flex: 1,
    justifyContent: "center",
  },
  bacimaga: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  phon: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  butt: {
    marginTop: 10,
    width: 300,
    height: 110,
    marginLeft: 15,
    borderRadius: 20,

    overflow: "hidden",
  },

  textt: {
    fontSize: 25,
    marginTop: -20,
    marginLeft: 15,
    color: "white",
  },
  avaText: {
    marginLeft: 20,
    fontSize: 23,
    color: "#fff",
  },
  ava: {
    display: "flex",
    marginTop: 40,
    backgroundColor: "#8D4AB5",
    width: 290,
    height: 70,
    flexDirection: "row",
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 16,
  },
  img: {
    width: 80,
    height: 60,
    borderRadius: 20,
  },
  textt1: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 15,
    color: "white",
  },
  imgVind: {
    width: 55,
    height: 55,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginLeft: 7,
  },
  container: {
    flex: 1,
    height: 1050,
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
  },
  cont: {
    display: "flex",
    backgroundColor: "witef",
    marginTop: 20,
  },
  imgfon: {
    width: 440,
    height: 760,
    marginTop: 650,
    marginLeft: -100,
  },
});
