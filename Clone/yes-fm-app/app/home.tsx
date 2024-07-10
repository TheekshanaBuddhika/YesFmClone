import { View, Image, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import React, { useState } from 'react'
const BGImage = require('../assets/images/yesfmbackground.png');
const IconImage = require('../assets/images/yesfm.png');
const volumebutton = require('../assets/images/volume_up.png');
const mutebutton = require('../assets/images/volume_mute.png');
const arrow = require('../assets/images/arrow_forward.png');
const facebook = require('../assets/images/facebook.png');
const twitter = require('../assets/images/twitterx.png');
const tiktok = require('../assets/images/tik-tok.png');
const instagram = require('../assets/images/instagram.png');
const youtube = require('../assets/images/youtube.png');
const radio = require('../assets/images/radio.png');
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

export default function home() {

    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const toggleMute = () => {
        setIsMute(!isMute);
    };
    return (
        <View style={styles.container}>
            <Image source={BGImage} style={styles.image} />
            <View style={styles.overlayContainer}>
                <Image source={IconImage} style={styles.buttonImage} />
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => router.push('/youtubepage')}>
                    <Text style={styles.buttonText}>WATCH LIVE</Text>
                    <Image source={arrow} style={styles.arrowbuttton} />
                </TouchableOpacity>
            </View>
            <View style={styles.radioCntainer}>
                <View style={styles.radioimageCntainer}>
                    <Image source={IconImage} style={styles.radiobuttonImage} />
                </View>
            </View>
            <View style={styles.radiotxtCntainer}><Text style={styles.radiobuttonText}>101.1 Yes FM Manila</Text></View>
            <View style={styles.playbuttonContainer}>
                <TouchableOpacity activeOpacity={0.9} style={styles.playButton1} onPress={toggleMute}>
                    <Image source={isMute ? mutebutton : volumebutton} style={styles.playButtonImage1} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.playButton2}>
                    <Icon name={isPlaying ? "pause" : "play-arrow"} style={styles.playButtonImage2} size={60} color="#2F69B3" onPress={togglePlayPause} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.playButton3}>
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
            <TouchableOpacity activeOpacity={0.9} style={styles.radiobutton}>
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
        zIndex: 1,
        width: '100%',
        height: '32%',
        marginBottom: 10,
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    radiobuttonImage: {
        width: '100%',
        height: '100%',
    },
    radioimageCntainer: {
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
        left: 0,
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


