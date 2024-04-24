import { useEffect, useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo'
import { Audio } from 'expo-av';
import { tracks } from '../services/musicService';
import { useAudio } from '../context/AudioContext';


function PlayerScreen() {
    // const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState();
    const [song, setSong] = useState(0);

    const {soundObject, setSoundObject, setIsPlaying} = useAudio()


    const togglePlayback = () => {setIsPlaying(false)}


    useEffect(() => {
        async function playSound() {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    { uri: tracks[song].url }
                );
                setSoundObject(sound);
                setIsPlaying(true);
            } catch (error) {
                console.error('Error loading audio:', error);
            }
        };

        playSound();
    }, [song, tracks])


    useEffect(() => {
        sound?.setOnPlaybackStatusUpdate(status => {
            if (status.didJustFinish) {
                console.log('The song has reached its end.');
                setSong(song + 1);
            }
        });
    }, [sound])



    const nextSong = async () => {
        await soundObject.stopAsync()
        if (song === tracks.length - 1) return setSong(0)
        setSong(song + 1);
    };

    const prevSong = async () => {
        await soundObject.stopAsync()
        if (song === 0) return setSong(song);
        setSong(song - 1);
    }


    return (
        <>
            <ImageBackground resizeMode='cover' style={styles.background} source={require('../assets/background.jpg')}>
{/* 
                <SongCard
                    title={tracks[song].name}
                    album={artist.name}
                    image={artist.image}
                    artist={artist.artist_name} /> */}


                <View style={styles.controller}>
                    <Slider style={{ width: 300, height: 50 }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#ffffff"
                        maximumTrackTintColor="#ffffff" />

                    <View style={styles.controllBtns}>

                        <TouchableWithoutFeedback onPress={prevSong}>
                            <Entypo name='controller-jump-to-start' color={'#fff'} size={40} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={togglePlayback}>
                            <View style={styles.playBtn} >
                                <Entypo name={isPlaying ? "controller-paus" : "controller-play"} color="#ff0000" size={40} onPress={togglePlayback} />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={nextSong}>
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