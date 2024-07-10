import { View, Image, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import React from 'react'
import { Navigator } from 'expo-router';
const BGImage = require('../assets/images/yesfmbackground.png');
const IconImage = require('../assets/images/yesfm.png'); // Replace with the actual icon image path

export default function home() {
    return (
        <View style={styles.container}>
            <Image source={BGImage} style={styles.image} />
            <View style={styles.overlayContainer}>
                <Image source={IconImage} style={styles.buttonImage} />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>WATCH LIVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.radioCntainer}>
                <View style={styles.radioimageCntainer}>
                    <Image source={IconImage} style={styles.radiobuttonImage} />
                </View>
            </View>
            <View style={styles.radiotxtCntainer}><Text style={styles.radiobuttonText}>WATCH LIVE</Text></View>
            <View style={styles.playbuttonContainer}>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={IconImage} style={styles.playButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={IconImage} style={styles.playButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={IconImage} style={styles.playButtonImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2F69B3',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
    },
    overlayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        zIndex: 1,
        width: '100%',
        height: '5%',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 30
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        width: '50%',
        height: '100%',
    },
    buttonImage: {
        height: '100%',
        width: '15%',

    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto',
    },
    radioCntainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
        height: '35%',
        marginBottom: 10,
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    }, radiobuttonImage: {
        width: '100%',
        height: '95%',
    }, radioimageCntainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2F69B3',
        zIndex: 1,
        width: '100%',
        height: '100%',
        padding: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,


    }, radiotxtCntainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        width: '100%',
        height: '5%',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15

    },
    radiobuttonText: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Roboto',
    },
    playbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        zIndex: 1,
        width: '100%',
        height: '15%',
        paddingLeft: 15,
        paddingRight: 15,
    },
    playButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        borderRadius: 100,
        marginHorizontal: 5,
    },
    playButtonImage: {
        width: 30,
        height: 30,
    },
});


