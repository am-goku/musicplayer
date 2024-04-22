import { Animated, Button, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

import Entypo from 'react-native-vector-icons/Entypo'
import SongCard from '../components/SongCard';
import { tracks } from '../services/musicService';


function PlayerScreen() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1.0);

    const [sound, setSound] = useState();

    const [song, setSong] = useState(tracks[2]);

    useEffect(() => {
        async function playSound() {
            try {
              // Load the audio from the URL
              const { sound } = await Audio.Sound.createAsync(
                { uri: song.url }
              );

        
              // Set the sound object to the state
              setSound(sound);
        
              // Play the loaded audio
              await sound.playAsync();
              setIsPlaying(true);
            } catch (error) {
              console.error('Error loading audio:', error);
            }
        };

        playSound();
    }, [song])


    useEffect(() => {
        
    })


    const togglePlayback = async () => {
        try {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
        } catch (error) {
            console.log(error, isPlaying);
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (value) => {
        setVolume(value);
        soundObject.setVolumeAsync(value).catch((err) => {
            console.log(err);
        });
    };


    return (
        <>

            {/* <Stack.Screen name='play' options={{title:'overview'}}  /> */}

            <ImageBackground resizeMode='cover' style={styles.background} source={require('../assets/background.jpg')}>

                <SongCard />


                <View style={styles.controller}>
                    <Slider style={{ width: 300, height: 50 }}
                        minimumValue={0}
                        maximumValue={1}
                        value={volume}
                        onValueChange={handleVolumeChange}
                        minimumTrackTintColor="#ffffff"
                        maximumTrackTintColor="#ffffff" />

                    <View style={styles.controllBtns}>

                        <TouchableWithoutFeedback>
                            <Entypo name='controller-jump-to-start' color={'#fff'} size={40} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={togglePlayback}>
                            <View style={styles.playBtn} >
                                <Entypo name={isPlaying ? "controller-paus" : "controller-play"} color="#ff0000" size={40} onPress={togglePlayback} />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <Entypo name='controller-next' color={'#fff'} size={40} />
                        </TouchableWithoutFeedback>

                    </View>
                </View>



            </ImageBackground>
        </>
    )
}

export default PlayerScreen



const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight + 20,
        gap: 10
    },


    controller: {
        width: 400,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },

    controllBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
    },

    playBtn: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    }

})