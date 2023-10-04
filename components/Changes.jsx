import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Appearance,
  AppRegistry,
} from "react-native";

import { Theme, darkStyles, lightStyles, isDark } from "./theme";

const theme = () => {
  return isDark() ? darkStyles : lightStyles;
};

let changesLoad;
let changesRead;

class Change {
  constructor(id, piece, trademark, serialNumber, date) {
    this.id = id;
    this.piece = piece;
    this.trademark = trademark;
    this.serialNumber = serialNumber;
    this.date = date;
  }
}

const Changes = () => {
  const [changes, setChanges] = useState([]); 

  changesLoad = setChanges;
  changesRead = changes; 

  return (
    <>
      {changes.forEach(change => {
        <View style={[styles.contentInfo, theme().container]}>
            <Text style={[{color: 'white'}, { fontSize: 18, fontWeight: "bold" }]}>
              {change.piece}
            </Text>
            <Text style={[{color: 'white'}, { fontSize: 18 }]}>
              {change.trademark}
            </Text>
            <Text style={[{color: 'white'}, { fontSize: 18 }]}>
              {change.serialNumber}
            </Text>
            <Text style={[{color: 'white'}, { fontSize: 18 }]}>
              {change.date.toLocaleDateString()}
            </Text>
        </View>
      })
      }
    </>
  );
};

const styles = StyleSheet.create({
  contentInfo: {
    backgroundColor: "#d16860",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
  },
});

export { Change, Changes, changesLoad, changesRead };
