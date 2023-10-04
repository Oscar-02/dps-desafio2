import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Modal,
  Button,
} from "react-native";

import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Theme, darkStyles, lightStyles, isDark } from "./theme";
import { Change, Changes, changesLoad, changesRead } from "./Changes";

const theme = () => {
  return isDark() ? darkStyles : lightStyles;
};

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={[styles.container, theme().container]}>
      <SafeAreaView style={theme().container}></SafeAreaView>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.addButton}
            onPress={() => navigation.navigate("AddChange")}
          >
            <Text
              style={[
                theme().text,
                { fontSize: 24, marginLeft: 20, marginRight: 20 },
              ]}
            >
              Notificar 🛠️
            </Text>
          </TouchableHighlight>
          <Text style={[styles.headerText, theme().text]}>Inicio</Text>
          <Text style={[theme().text, { fontSize: 18 }]}>
            Talleres Los Ilustres
          </Text>
        </View>
        <View style={styles.info}>
          <ScrollView style={{ height: 500 }}>
            {/* <Changes/> */}
            <Modal transparent={true} visible={modalOpen} animationType="fade">
              <View style={[styles.contentInfo, theme().container]}>
                <Text
                  style={[
                    { color: "white" },
                    { fontSize: 18, fontWeight: "bold" },
                  ]}
                >
                  Spare Tire
                </Text>
                <Text style={[{ color: "white" }, { fontSize: 18 }]}>
                  Mitsubishi
                </Text>
                <Text style={[{ color: "white" }, { fontSize: 18 }]}>
                N/T de fabrica
                </Text>
                <Text style={[{ color: "white" }, { fontSize: 18 }]}>
                  {new Date().toLocaleDateString()}{" "}
                  {new Date().toLocaleTimeString()}
                </Text>
                <Button
                  title="Cerrar"
                  onPress={() => {
                    setModalOpen(!modalOpen);
                  }}
                ></Button>
              </View>
            </Modal>
            <Changes />
            <TouchableHighlight onPress={() => setModalOpen(true)}>
              <View style={[styles.contentInfo, theme().container]}>
                <Text
                  style={[
                    { color: "white" },
                    { fontSize: 18, fontWeight: "bold" },
                  ]}
                >
                  Spare Tire
                </Text>
                <Text style={[{ color: "white" }, { fontSize: 18 }]}>
                  Mitsubishi
                </Text>
                <Text style={[{ color: "white" }, { fontSize: 18 }]}>
                  N/T de fabrica
                </Text>
                <Text style={[{ color: "white" }, { fontSize: 18 }]}>
                  {new Date().toLocaleDateString()}{" "}
                  {new Date().toLocaleTimeString()}
                </Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    marginLeft: 20,
  },
  headerText: {
    fontWeight: "bold",
    maxWidth: 150,
    fontSize: 48,
  },
  addButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2dc4cc",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: 0,
  },
  info: {
    marginTop: 20,
    alignItems: "center",
  },
  contentInfo: {
    backgroundColor: "#d16860",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
    padding: 30,
    marginTop: 20,
  },
});

export default Home;
