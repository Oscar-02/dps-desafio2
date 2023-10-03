import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Appearance, AppRegistry } from 'react-native';

const Theme = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());

    Appearance.addChangeListener(({ colorScheme }) => {
        setTheme(colorScheme);
    });

    return theme;
}

const darkStyles = StyleSheet.create({
    container:{
        backgroundColor: 'black', 
     },
     text:{
         color: 'white',
     }
})

const lightStyles = StyleSheet.create({
    container:{
        backgroundColor: 'white', 
     },
     text:{
         color: 'black',
     }
})

const isDark = () => {
    return Theme() === 'dark' ? true : false;
}

export {Theme, darkStyles, lightStyles, isDark};

