import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Theme, darkStyles, lightStyles, isDark } from "./theme";
import { Change, Changes, changesLoad, changesRead } from "./Changes";

const darkYN = () => {
  return Theme() === "dark" ? "white" : "black";
};

const theme = () => {
  return isDark() ? darkStyles : lightStyles;
};

function isEmptyString(value) {
  return (
    value == null || (typeof value === "string" && value.trim().length === 0)
  );
}

const AddChange = ({ navigation }) => {
  const [id, setId] = useState(changesRead.length + 1);
  const [piece, setPiece] = useState("");
  const [trademark, setTrademark] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [date, setDate] = useState(new Date());

  const [saveBtn, setSaveBtn] = useState(false);

  useEffect(() => {
    if (id && piece && trademark && serialNumber && date) {
        if (isEmptyString(piece) || isEmptyString(trademark) || isEmptyString(serialNumber)) setSaveBtn(false);
        else setSaveBtn(true);
    }
    else setSaveBtn(false);
  }, [piece, trademark, serialNumber, date]);

  function saveChange () {
    changesLoad([...changesRead, new Change(id, piece, trademark, serialNumber, date)]);
    console.log(changesRead[id-1]);
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.container, theme().container]}>
        <SafeAreaView style={[theme().container]}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              onPress={() => navigation.navigate("Home")}
              title="Cancelar"
            />
            <Button
              onPress={() => saveChange()}
              title="Guardar" disabled={!saveBtn}
            />
          </View>
        </SafeAreaView>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.headerText, theme().text]}>Añadir piezas</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputView}>
              <Text style={[theme().text, styles.inputLabel]}>Pieza</Text>
              <TextInput
                style={[
                  styles.input,
                  theme().text,
                  { borderBottomColor: darkYN() },
                ]}
                onChangeText={(e) => setPiece(e)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={[theme().text, styles.inputLabel]}>Marca</Text>
              <TextInput
                style={[
                  styles.input,
                  theme().text,
                  { borderBottomColor: darkYN() },
                ]}
                onChangeText={(e) => setTrademark(e)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={[theme().text, styles.inputLabel]}>Nº de serie</Text>
              <TextInput
                style={[
                  styles.input,
                  theme().text,
                  { borderBottomColor: darkYN() },
                ]}
                onChangeText={(e) => setSerialNumber(e)}
              />
            </View>
            <View style={[styles.inputView, { marginTop: 40 }]}>
              <Text style={[theme().text, styles.inputLabel]}>
                Fecha de Cambio
              </Text>
              <DateTimePicker
                mode="date"
                display="calendar"
                value={date}
                onChange={(e, selected) => setDate(selected)}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 48,
    textAlign: "center",
  },
  form: {
    marginTop: 20,
    width: "100%",
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    minWidth: 200,
    padding: 10,
  },
});

export default AddChange;
