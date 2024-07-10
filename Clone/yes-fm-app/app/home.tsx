import { View, Image, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import React from 'react'
import { Navigator } from 'expo-router';
const BGImage = require('../assets/images/yesfmbackground.png');
const IconImage = require('../assets/images/yesfm.png');
const volumebutton = require('../assets/images/volume_up.png');
const arrow = require('../assets/images/arrow_forward.png');
const facebook = require('../assets/images/facebook.png');
const twitter = require('../assets/images/twitterx.png');
const tiktok = require('../assets/images/tik-tok.png');
const instagram = require('../assets/images/instagram.png');
const youtube = require('../assets/images/youtube.png');
const radio = require('../assets/images/radio.png');
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function home() {
    return (
        <View style={styles.container}>
            <Image source={BGImage} style={styles.image} />
            <View style={styles.overlayContainer}>
                <Image source={IconImage} style={styles.buttonImage} />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>WATCH LIVE</Text>
                    <Image source={arrow} style={styles.arrowbuttton} />
                </TouchableOpacity>
            </View>
            <View style={styles.radioCntainer}>
                <View style={styles.radioimageCntainer}>
                    <Image source={IconImage} style={styles.radiobuttonImage} />
                </View>
            </View>
            <View style={styles.radiotxtCntainer}><Text style={styles.radiobuttonText}>WATCH LIVE</Text></View>
            <View style={styles.playbuttonContainer}>
                <TouchableOpacity style={styles.playButton1}>
                    <Image source={volumebutton} style={styles.playButtonImage1} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton2}>
                    <Icon name="play-arrow" style={styles.playButtonImage2} size={60} color="#2F69B3" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton3}>
                    <Icon name="share" style={styles.playButtonImage3} size={40} color="#2F69B3" />
                </TouchableOpacity>
            </View>
            <View style={styles.socialbuttonContainer}>
                <Image source={facebook} style={styles.socialImage} />
                <Image source={twitter} style={styles.socialImage} />
                <Image source={tiktok} style={styles.socialImage} />
                <Image source={instagram} style={styles.socialImage} />
                <Image source={youtube} style={styles.socialImage} />
            </View>
            <TouchableOpacity style={styles.radiobutton}>
                <Image source={radio} style={styles.radioButtonImage1} />
            </TouchableOpacity>
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
        position: 'relative',

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
        justifyContent: 'space-evenly',
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        width: '40%',
        height: '100%',
    },
    buttonImage: {
        height: '100%',
        width: '15%',

    },
    buttonText: {
        fontSize: 14,
        color: '#ffffff',
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
        fontWeight: 'bold',
    },
    playbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
        height: '15%',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 50
    },
    playButton1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 300,
        height: '60%',
        width: '21%',
        borderColor: 'lightgray',
        borderWidth: 5,

    }, playButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        height: '80%',
        width: '28%',
        borderColor: 'lightgray',
        borderWidth: 5,

    }, playButton3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        height: '60%',
        width: '21%',
        borderColor: 'lightgray',
        borderWidth: 5,
    },
    playButtonImage1: {
        width: 40,
        height: 40,
    }, playButtonImage2: {
        width: 60,
        height: 60,
    }, playButtonImage3: {
        width: 40,
        height: 40,
    },
    arrowbuttton: {
        width: 25,
        height: 20,
    }, socialbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 5,
        zIndex: 1,
        width: '60%',
        height: '5%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    socialImage: {
        width: 30,
        height: 30,
    },
    radiobutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 1,
        height: '8%',
        width: '17%',
        borderRadius: 100,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 100,
        right: 0,
        marginRight: 15,
    },
    radioButtonImage1: {
        width: 30,
        height: 30,
    }
});


