import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import {Theme, darkStyles, lightStyles, isDark} from './theme';

const theme = () => {
    return isDark() ? darkStyles : lightStyles ;
}

const Home = ({navigation}) => {
    return(
        <View style={[styles.container, theme().container]}>
            <SafeAreaView style={theme().container}>             
            </SafeAreaView>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.addButton} onPress={() => navigation.navigate("AddChange")}>
                        <Text style={[theme().text, { fontSize: 24, marginLeft: 20, marginRight: 20 }]}>Notificar 🛠️</Text>
                    </TouchableHighlight>
                    <Text style={[styles.headerText, theme().text]}>Inicio</Text>
                    <Text style={[theme().text, {fontSize: 18}]}>Talleres Los Ilustres</Text>
                </View>
                <View>
                    {/*Aqui va el bolado ya obtenido xd*/}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        marginTop: 20,
        marginLeft: 20,
    },
    headerText:{
        fontWeight: 'bold',
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
})

export default Home;