import { Image, StyleSheet, Text, View , StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Welcome");
        }, 2000);
    })

    return (
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Image style={styles.image}
                source={require('../assets/images/image35.png')}
            />

        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFDFF",
        justifyContent: "center",
        alignItems: "center"

    },
    text: {
        fontSize: 20
    },
    image: {
        width: 120,
        height: 120,

    }
})