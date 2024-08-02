import React from 'react'

import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer } from '@react-navigation/native'


function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
return (

    <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.darkText}>AppPro</Text>
    </View>

)
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            },
        
        whiteText: {
            color: '#FFFFFF'
        },
        darkText: {
            color: '#000000'
        }

        }     
)
export default AppPro;