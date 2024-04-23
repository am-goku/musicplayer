import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

function CommonCard({name, uri}) {

    const [track, setTrack] = useState(null)

    const handlePlay = () => {

    }

    return (
        <>
            <View style={styles.musicCard} >
                <Entypo name='beamed-note' size={20} />
                <Text style={{maxWidth:300}} numberOfLines={1}>{name}</Text>
                <Entypo name='controller-play' size={20} style={styles.playBtn} onPress={handlePlay} />
            </View>
        </>
    )
}

export default CommonCard


const styles = StyleSheet.create({
    musicCard: {
        width: 350,
        height: 50,
        backgroundColor: 'white',

        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'white',
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,

        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        // justifyContent: 'center',
    },

    playBtn: {
        position: 'absolute',
        right: 10
    }
})