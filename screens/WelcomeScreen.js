import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Images */}
            <Image 
                style={styles.imageOne}
                source={require('../assets/images/image36.png')} 
            />
            <Image 
                style={styles.imageTwo}
                source={require('../assets/images/image37.png')} 
            />
            <Image 
                style={styles.imageThree}
                source={require('../assets/images/image38.png')} 
            />

            {/* Text */}
            <Text style={styles.heading}>Let's GET Started</Text>
            <Text style={styles.subHeading}>
                Welcome to Roomie Find. Connect with roommates, discover nearby mess options, and make student living easier.
            </Text>

            {/* Next Button */}
            <Pressable 
                style={styles.button} 
                onPress={() => navigation.navigate('Login')} // Replace 'NextScreen' with your actual screen
            >
                <Text style={styles.buttonText}>NEXT</Text>
            </Pressable>
        </View>
    );
};

export default WelcomeScreen;

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5edc1f",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    imageOne: {
        height: 170, width: 180,
        borderRadius: 20, position: "absolute",
        top: 50, left: 30,
        transform: [{ rotate: "-15deg" }]
    },
    imageTwo: {
        height: 270, width: 200,
        borderRadius: 20, position: "absolute",
        top: 120, right:5,
        transform: [{ rotate: "-5deg" }]
    },
    imageThree: {
        height: 150, width: 100,
        borderRadius: 20, position: "absolute",
        top: 220, left: 50,
        transform: [{ rotate: "-15deg" }]
    },
    heading: {
        fontSize: 49,
        fontWeight: "800",
        color: "white",
        textAlign: "center",
        marginTop: 300,
        right:50
    },
    subHeading: {
        fontSize: 20,
        fontWeight: "400",
        color: "white",
        textAlign: "center",
        marginVertical: 20
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        left:40
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
