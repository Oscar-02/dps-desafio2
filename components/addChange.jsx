import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, Button, TextInput } from 'react-native';

import DateTimePicker from "@react-native-community/datetimepicker";

import {Theme, darkStyles, lightStyles, isDark} from './theme';

const darkYN = () => {
    return Theme() === 'dark' ? "white" : "black";
}

const theme = () => {
    return isDark() ? darkStyles : lightStyles ;
}

const AddChange = ({navigation}) => {
    return(
        <View style={[styles.container, theme().container]}>
            <SafeAreaView style={[theme().container]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Button onPress={() => navigation.navigate("Home")} title="Cancelar"/>
                    <Button onPress={() => navigation.navigate("Home")} title="Guardar"/>
                </View>  
            </SafeAreaView>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[styles.headerText, theme().text]}>Añadir piezas</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputView}>
                        <Text style={[theme().text, styles.inputLabel]}>Pieza</Text>
                        <TextInput style={[styles.input, theme().text, {borderBottomColor: darkYN()}]} />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={[theme().text, styles.inputLabel]}>Marca</Text>
                        <TextInput style={[styles.input, theme().text, {borderBottomColor: darkYN()}]} />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={[theme().text, styles.inputLabel]}>Nº de serie</Text>
                        <TextInput style={[styles.input, theme().text, {borderBottomColor: darkYN()}]} />
                    </View>
                    <View style={[styles.inputView, {marginTop: 40}]}>
                        <Text style={[theme().text, styles.inputLabel]}>Fecha de Cambio</Text>
                        <DateTimePicker mode="date" display="calendar" minimumDate={new Date()} value={new Date()} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        marginTop: 20,
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 48,
        textAlign: 'center',
    },
    form:{
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
})

export default AddChange;