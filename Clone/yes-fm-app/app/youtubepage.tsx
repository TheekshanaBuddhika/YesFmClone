import { View, Image, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import React from 'react'
const BGImage = require('../assets/images/yesfmbackground.png');
const IconImage = require('../assets/images/yesfm.png');
const volumebutton = require('../assets/images/volume_up.png');
const arrow = require('../assets/images/arrow_back.png');
const facebook = require('../assets/images/facebook.png');
const twitter = require('../assets/images/twitterx.png');
const tiktok = require('../assets/images/tik-tok.png');
const instagram = require('../assets/images/instagram.png');
const youtube = require('../assets/images/youtube.png');
const ytbg = require('../assets/images/ytbg.png');
import { useRouter } from 'expo-router';

export default function youtubepage() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Image source={BGImage} style={styles.image} />
            <View style={styles.overlayContainer}>
                <Image source={IconImage} style={styles.buttonImage} />
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => router.push('/home')}>
                    <Image source={arrow} style={styles.arrowbuttton} />
                    <Text style={styles.buttonText}>LISTEN LIVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.radioCntainer}>
                <Image source={ytbg} style={styles.radiobuttonImage} />
            </View>
            <View style={styles.radiotxtCntainer}><Text style={styles.radiobuttonText}>101.1 Yes FM Manila</Text></View>
            <View style={styles.socialbuttonContainer}>
                <Image source={facebook} style={styles.socialImage} />
                <Image source={twitter} style={styles.socialImage} />
                <Image source={tiktok} style={styles.socialImage} />
                <Image source={instagram} style={styles.socialImage} />
                <Image source={youtube} style={styles.socialImage} />
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
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
        height: '4%',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 45
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
        height: '90%',
        width: '11%',

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
        backgroundColor: 'white',
        zIndex: 1,
        width: '100%',
        height: '25%',
        marginBottom: 10,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    radiobuttonImage: {
        width: '100%',
        height: '100%',
    }, radiotxtCntainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        width: '100%',
        height: '5%',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 0

    },
    radiobuttonText: {
        fontSize: 24,
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    playbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
        height: '15%',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 110
    },
    playButton1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 300,
        height: '50%',
        width: '18%',
        borderColor: 'lightgray',
        borderWidth: 5,

    }, playButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        height: '65%',
        width: '23%',
        borderColor: 'lightgray',
        borderWidth: 5,

    }, playButton3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        height: '50%',
        width: '18%',
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
        width: 18,
        height: 15,
    },
    socialbuttonContainer: {
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
        marginLeft: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    socialImage: {
        width: 25,
        height: 25,
    },
    radiobutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 1,
        height: '7%',
        width: '15%',
        borderRadius: 100,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 70,
        right: 0,
        marginRight: 15,
    },
    radioButtonImage1: {
        width: 25,
        height: 25,
    }
});


