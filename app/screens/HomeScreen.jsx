import { ImageBackground, StatusBar, StyleSheet, View, ScrollView, Text, TouchableHighlight, Button, Modal } from 'react-native'
import CommonCard from '../components/CommonCard'

import { usePermissions } from 'expo-permissions'
import { useEffect, useState } from 'react'

import * as MediaLibrary from "expo-media-library"

function HomeScreen() {

    const [tracks, setTracks] = useState([])
    const [modal, setModal] = useState(false)

    const getMedia = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access media library was denied');
            return;
        }

        const assets = await MediaLibrary.getAssetsAsync({ mediaType: 'audio', sortBy: 'creationTime' });
        setTracks(assets.assets)
        console.log(assets.assets);
    };


    useEffect(() => {
        getMedia();
    }, [])

    return (
        <>
            <ImageBackground resizeMode='cover' style={styles.background} source={require('../assets/background.jpg')}>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.CardContainer}>
                     <Text style={{color: "#fff", display: "flex", fontWeight: 'bold'}}>Songs</Text>
                        {
                            tracks.map((track, index) => {
                                return <CommonCard name={track.filename} uri={track.uri} key={index} />
                            })
                        }

                        <Button title='open' onPress={() => setModal(true)}></Button>


                    </View>

                </ScrollView>


            </ImageBackground>
        </>
    )
}

export default HomeScreen


//Style Section

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },

    ScrollView: {
        width: "100%",
        display: "flex",
        gap: 40,
        // position: "absolute",
        top: StatusBar.currentHeight + 50,
        padding: 20,
        marginBottom: 40,
    },

    CardContainer: { display: "flex", flexDirection: "column", gap: 20, width: "100%",
        justifyContent: 'center', alignItems: 'center',
    },


})